// Load the example module
const fastdds = require('./fastdds_javascript/build/Release/fastdds.node');
const helloWorld = require('./fastdds_javascript_examples/build/Release/hello_world.node');

// console.log(fastdds);

var factory = fastdds.DomainParticipantFactory.get_instance();
var pqos = new fastdds.DomainParticipantQos();
var node = factory.create_participant(0, pqos);

var subqos = new fastdds.SubscriberQos();
var sub = node.create_subscriber(subqos);

var tqos = new fastdds.TopicQos();

var type = new fastdds.TypeSupport(new helloWorld.HelloWorldPubSubType());
var returnCode = type.register_type(node);

var topic = node.create_topic("hello_world_topic_tvl", type.get_type_name(), tqos);

var drQos = new fastdds.DataReaderQos();
// var dataReaderListener = new fastdds.DataReaderListener();
// var dataReader = sub.create_datareader_topic(topic, drQos, dataReaderListener, fastdds.StatusMask.all());
var dataReader = sub.create_datareader(topic, drQos, null, fastdds.StatusMask.all());

var terminate_condition_ = new fastdds.GuardCondition();
var wait_set_ = new fastdds.WaitSet();

wait_set_.attach_condition(dataReader.get_statuscondition());
wait_set_.attach_condition(terminate_condition_);

var hello_ = new helloWorld.HelloWorld();
let is_stopped = false;
let sample_count = 0;
while (!is_stopped)
{
    var triggered_conditions = new fastdds.ConditionSeq();
    var ret_code = wait_set_.wait(triggered_conditions, fastdds.c_TimeInfinite);
    if (fastdds.RETCODE_OK != ret_code)
    {
        console.log("Error waiting for conditions");        
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
                    console.log("Waitset Subscriber matched.");
                }
                else if (status_.current_count_change == -1)
                {
                    console.log("Waitset Subscriber unmatched.");
                }
                else
                {
                    console.log(status_.current_count_change + " is not a valid value for SubscriptionMatchedStatus current count change");
                }
            }
            if (changed_statuses.is_active(fastdds.StatusMask.data_available()))
            {
                var info = new fastdds.SampleInfo();
                while (!is_stopped && (fastdds.RETCODE_OK == dataReader.take_next_sample(hello_, info)))
                {
                    if ((info.instance_state == fastdds.ALIVE_INSTANCE_STATE) && info.valid_data)
                    {
                        console.log("Message: '" + hello_.message() + "' with index: '"
                                    + hello_.index() + "' RECEIVED");
                                    
                        sample_count++;
                        if (sample_count >= 100)
                        {
                            is_stopped = true;
                        }
                    }
                }
            }
        }
    }
}

console.log("\nAll tests completed successfully!");

// Keep the program running by waiting for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Press 'q' to exit...");

rl.on('line', (input) => {
    if (input.trim() === 'q') {
        console.log("Exiting...");
        rl.close();
        process.exit(0);
    }
});

