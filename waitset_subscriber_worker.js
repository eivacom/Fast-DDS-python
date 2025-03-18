const { parentPort } = require('worker_threads');

// Load the example module
const fastdds = require('./fastdds_javascript/build/Release/fastdds.node');
const helloWorld = require('./fastdds_javascript_examples/build/Release/hello_world.node');

let participant = null;
let terminate_condition = null;
let dataReader = null;
let wait_set = new fastdds.WaitSet();
let hello = new helloWorld.HelloWorld();

let running = true;
let loopRunning = false;

function initSubscriber()
{
    // Create the participant
    var factory = fastdds.DomainParticipantFactory.get_instance();
    participant = factory.create_participant_with_default_profile(null, fastdds.StatusMask.none());
    if (participant == null)
    {
        parentPort.postMessage("Participant initialization failed");
    }

    // Register the type
    var type_ = new fastdds.TypeSupport(new helloWorld.HelloWorldPubSubType());
    type_.register_type(participant);

    // Create the subscriber
    var sub_qos = fastdds.SUBSCRIBER_QOS_DEFAULT;
    participant.get_default_subscriber_qos(sub_qos);
    var subscriber_ = participant.create_subscriber(sub_qos, null, fastdds.StatusMask.none());
    if (subscriber_ == null)
    {
        parentPort.postMessage("Subscriber initialization failed");
    }

    // Create the topic
    var topic_qos = fastdds.TOPIC_QOS_DEFAULT;
    participant.get_default_topic_qos(topic_qos);
    var topic_ = participant.create_topic("hello_world_topic", type_.get_type_name(), topic_qos);
    if (topic_ == null)
    {
        parentPort.postMessage("Topic initialization failed");
    }

    // Create the reader
    var reader_qos = fastdds.DATAREADER_QOS_DEFAULT;
    subscriber_.get_default_datareader_qos(reader_qos);
    dataReader = subscriber_.create_datareader(topic_, reader_qos, null, fastdds.StatusMask.all());
    if (dataReader == null)
    {
        parentPort.postMessage("DataReader initialization failed");
    }
    
    terminate_condition = new fastdds.GuardCondition();
    var status_condition = dataReader.get_statuscondition();
    wait_set.attach_condition(status_condition);
    wait_set.attach_condition(terminate_condition);
}

function unsubscribe()
{
    // Delete DDS entities contained within the DomainParticipant
    participant.delete_contained_entities();

    // Delete DomainParticipant
    fastdds.DomainParticipantFactory.get_instance().delete_participant(participant);
}

// Listen for messages from the main thread
parentPort.on('message', (message) => {
    if (message === 'stop') {
        terminate();        
    } else if (message === 'pause') {
        pause();
    } else if (message === 'resume') {
        resume();
    }
});

// Long-running task in the worker
async function startMessageLoop() 
{
    if (loopRunning) return;
    else parentPort.postMessage("Checking...");

    loopRunning = true;
    
    parentPort.postMessage({ status: 'started' });
    while (running) 
    {
        var triggered_conditions = new fastdds.ConditionSeq();
        var ret_code = wait_set.wait(triggered_conditions, fastdds.c_TimeInfinite);
        if (fastdds.RETCODE_OK != ret_code)
        {
            parentPort.postMessage("Error waiting for conditions");        
            continue;
        }
        for (let i = 0; i <triggered_conditions.size(); i++)
        {
            let cond = triggered_conditions.get(i);
            let status_cond = fastdds.Condition.as_StatusConditions(cond);
            if (null != status_cond)
            {
                var entity = status_cond.get_entity();
                var changed_statuses = entity.get_status_changes();
                if (changed_statuses.is_active(fastdds.StatusMask.subscription_matched()))
                {
                    var status_ = new fastdds.SubscriptionMatchedStatus();
                    dataReader.get_subscription_matched_status(status_);
                    if (status_.current_count_change == 1)
                    {
                        parentPort.postMessage("Waitset Subscriber matched.");
                    }
                    else if (status_.current_count_change == -1)
                    {
                        parentPort.postMessage("Waitset Subscriber unmatched.");
                    }
                    else
                    {
                        parentPort.postMessage(status_.current_count_change + " is not a valid value for SubscriptionMatchedStatus current count change");
                    }
                }
                if (changed_statuses.is_active(fastdds.StatusMask.data_available()))
                {
                    var info = new fastdds.SampleInfo();
                    while (running && (fastdds.RETCODE_OK == dataReader.take_next_sample(hello, info)))
                    {
                        if ((info.instance_state == fastdds.ALIVE_INSTANCE_STATE) && info.valid_data)
                        {
                            parentPort.postMessage("Message: '" + hello.message() + "' with index: '"
                                        + hello.index() + "' RECEIVED");
                        }
                    }
                }
            }
        }
        await new Promise(resolve => setTimeout(resolve, 10)); // Simulate work
    }

    unsubscribe();
    loopRunning = false;
}

// Function to handle pausing
function pause() 
{
    running = false;        
    parentPort.postMessage({ status: 'paused' });
}

function resume() 
{
    running = true;    
    // Start the loop again if it's not running
    if (!loopRunning) {
        parentPort.postMessage({ status: 'resumed' });
        initSubscriber();
        startMessageLoop();
    }
}

function terminate() 
{
    running = false;
    terminate_condition.set_trigger_value(true);
    parentPort.close(); // Close worker when done
}

initSubscriber();
startMessageLoop();
