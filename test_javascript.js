// Load the example module
const fastdds = require('./build/Release/fastdds.node');

// console.log(fastdds);

var factory = fastdds.DomainParticipantFactory.get_instance();
var pqos = new fastdds.DomainParticipantQos();
var node = factory.create_participant(0, pqos);

var subqos = new fastdds.SubscriberQos();
var sub = node.create_subscriber(subqos);

var tqos = new fastdds.TopicQos();

var type = new fastdds.TypeSupport(new fastdds.HelloWorldPubSubType());
var returnCode = type.register_type(node);

var topic = node.create_topic("hello_world_topic", type.get_type_name(), tqos);

var drQos = new fastdds.DataReaderQos();
var dataReaderListener = new fastdds.DataReaderListener();
var dataReader = sub.create_datareader_topic(topic, drQos, dataReaderListener, fastdds.StatusMask.all());



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

