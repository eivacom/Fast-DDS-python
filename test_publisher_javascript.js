const fastdds = require('./fastdds_javascript/build/Release/fastdds.node');
const helloWorld = require('./fastdds_javascript_examples/build/Release/hello_world.node');

// Create the participant
const factory = fastdds.DomainParticipantFactory.get_instance();
const participant = factory.create_participant_with_default_profile(
  null,
  fastdds.StatusMask.none()
);

// Create the publisher
const publisher = participant.create_publisher(
  fastdds.PUBLISHER_QOS_DEFAULT,
  null,
  fastdds.StatusMask.none()
);

// Register the type
const type = new fastdds.TypeSupport(new helloWorld.HelloWorldPubSubType());
type.register_type(participant);

// Create the topic
const topicName = "hello_world_topic";
const topic = participant.create_topic(
  topicName,
  type.get_type_name(),
  fastdds.TOPIC_QOS_DEFAULT
);

// Create the writer
const dataWriter = publisher.create_datawriter(
  topic,
  fastdds.DATAWRITER_QOS_DEFAULT,
  null,
  fastdds.StatusMask.all()
);

// Waitset
const waitSet = new fastdds.WaitSet();
waitSet.attach_condition(dataWriter.get_statuscondition());
const data = new helloWorld.HelloWorld();

(async () => {
  while (true) {
    const triggered_conditions = new fastdds.ConditionSeq();
    const ret_code = waitSet.wait(triggered_conditions, fastdds.c_TimeInfinite);
    if (fastdds.RETCODE_OK != ret_code) {
      console.log("Error waiting for conditions");
      continue;
    }

    for (let i = 0; i < triggered_conditions.size(); i++) {
      const cond = triggered_conditions.get(i);
      if (cond) {
        const status_cond = fastdds.Condition.as_StatusConditions(cond);
        if (status_cond && dataWriter) {
          const entity = status_cond.get_entity();
          const changed_statuses = entity.get_status_changes();
          if (
            changed_statuses.is_active(fastdds.StatusMask.publication_matched())
          ) {
            // Read the current overall match status
            const status_ = new fastdds.PublicationMatchedStatus();
            dataWriter.get_publication_matched_status(status_);
            if (status_.current_count > 0) {
              console.log("Waitset Publisher matched.");

              // Instead of a blocking while loop, run an async loop that checks status each iteration.
              let publishing = true;
              while (publishing) {
                // Re-read the current match status on each iteration.
                const currentStatus = new fastdds.PublicationMatchedStatus();
                dataWriter.get_publication_matched_status(currentStatus);
                if (currentStatus.current_count > 0) {
                  // Update and write the sample.
                  data.index(data.index() + 1);
                  data.message(`Hello world ${data.index()}`);

                  const retcode = dataWriter.write(data);
                  if (retcode === fastdds.RETCODE_OK) {
                    console.log(
                      `Sent message: '${data.message()}' with index: ${data.index()}`
                    );
                  } else {
                    console.error(`Failed to send sample: ${retcode}`);
                  }

                  // Yield control to allow other events (like status updates) to be processed.
                  await new Promise(resolve => setTimeout(resolve, 10));
                } else {
                  console.log("No subscriber matched, breaking inner loop.");
                  publishing = false;
                }
              }
            } else {
              console.log("Waitset Publisher unmatched.");
            }
          }
        }
      }
    }
    // Yield control before next outer loop iteration.
    await new Promise((resolve) => setImmediate(resolve));
  }
})();