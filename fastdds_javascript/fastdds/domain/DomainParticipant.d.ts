import { Subscriber } from '../subscriber/Subscriber'
import { Topic } from '../topic/Topic'
/**
 * DomainParticipant used to group Publishers and Subscribers into a single working unit.
 */
export class DomainParticipant {
  // --- QoS Operations ---

  /**
   * Returns the value of the DomainParticipant QoS policies, writing into the provided qos object.
   * @param qos - DomainParticipantQos reference where the QoS is returned.
   * @returns RETCODE_OK.
   */
  get_qos(qos: DomainParticipantQos): ReturnCode

  /**
   * Returns the value of the DomainParticipant QoS policies.
   * @returns A reference to the DomainParticipantQos.
   */
  get_qos(): DomainParticipantQos

  /**
   * Sets the value of the DomainParticipant QoS policies.
   * @param qos - DomainParticipantQos to be set.
   * @returns RETCODE_IMMUTABLE_POLICY if any QoS cannot be changed, RETCODE_INCONSISTENT_POLICY if the QoS is not self consistent, or RETCODE_OK if changed correctly.
   */
  set_qos(qos: DomainParticipantQos): ReturnCode

  // --- Listener Operations ---

  /**
   * Allows accessing the DomainParticipantListener.
   * @returns A pointer to the DomainParticipantListener or null.
   */
  get_listener(): DomainParticipantListener | null

  // Overloaded set_listener methods:
  /**
   * Modifies the DomainParticipantListener and sets the mask to all.
   * **Warning:** Do not call this method from a DomainParticipantListener callback.
   * @param listener - New value for the DomainParticipantListener.
   * @returns RETCODE_OK if successful, RETCODE_ERROR otherwise.
   */
  set_listener(listener: DomainParticipantListener | null): ReturnCode
  /**
   * Modifies the DomainParticipantListener and sets the mask to all.
   * **Warning:** Do not call this method from a DomainParticipantListener callback.
   * @param listener - New value for the DomainParticipantListener.
   * @param timeout - Maximum time (in seconds) to wait for executing callbacks to finish.
   * @returns RETCODE_OK if successful, RETCODE_ERROR if failed (timeout expired).
   */
  set_listener(listener: DomainParticipantListener | null, timeout: number): ReturnCode
  /**
   * Modifies the DomainParticipantListener.
   * **Warning:** Do not call this method from a DomainParticipantListener callback.
   * @param listener - New value for the DomainParticipantListener.
   * @param mask - StatusMask that holds statuses the listener responds to.
   * @returns RETCODE_OK if successful, RETCODE_ERROR otherwise.
   */
  set_listener(listener: DomainParticipantListener | null, mask: StatusMask): ReturnCode
  /**
   * Modifies the DomainParticipantListener.
   * **Warning:** Do not call this method from a DomainParticipantListener callback.
   * @param listener - New value for the DomainParticipantListener.
   * @param mask - StatusMask that holds statuses the listener responds to.
   * @param timeout - Maximum time (in seconds) to wait for executing callbacks to finish.
   * @returns RETCODE_OK if successful, RETCODE_ERROR if failed (timeout expired).
   */
  set_listener(
    listener: DomainParticipantListener | null,
    mask: StatusMask,
    timeout: number
  ): ReturnCode

  // --- Participant Operations ---

  /**
   * Enables the DomainParticipant.
   * @returns RETCODE_OK.
   */
  enable(): ReturnCode

  /**
   * Creates a Publisher in this Participant.
   * @param qos - Publisher QoS.
   * @param listener - (Optional) PublisherListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Publisher or null.
   */
  create_publisher(
    qos: PublisherQos,
    listener?: PublisherListener | null,
    mask?: StatusMask
  ): Publisher | null

  /**
   * Creates a Publisher in this Participant using a publisher profile.
   * @param profile_name - Publisher profile name.
   * @param listener - (Optional) PublisherListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Publisher or null.
   */
  create_publisher_with_profile(
    profile_name: string,
    listener?: PublisherListener | null,
    mask?: StatusMask
  ): Publisher | null

  /**
   * Deletes an existing Publisher.
   * @param publisher - The Publisher to be deleted.
   * @returns RETCODE_PRECONDITION_NOT_MET if the publisher does not belong to this participant or has active DataWriters, RETCODE_OK if deleted correctly, or RETCODE_ERROR otherwise.
   */
  delete_publisher(publisher: Publisher): ReturnCode

  /**
   * Creates a Subscriber in this Participant.
   * @param qos - Subscriber QoS.
   * @param listener - (Optional) SubscriberListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Subscriber or null.
   */
  create_subscriber(
    qos: SubscriberQos,
    listener?: SubscriberListener | null,
    mask?: StatusMask
  ): Subscriber | null

  /**
   * Creates a Subscriber in this Participant using a subscriber profile.
   * @param profile_name - Subscriber profile name.
   * @param listener - (Optional) SubscriberListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Subscriber or null.
   */
  create_subscriber_with_profile(
    profile_name: string,
    listener?: SubscriberListener | null,
    mask?: StatusMask
  ): Subscriber | null

  /**
   * Deletes an existing Subscriber.
   * @param subscriber - The Subscriber to be deleted.
   * @returns RETCODE_PRECONDITION_NOT_MET if the subscriber does not belong to this participant or has active DataReaders, RETCODE_OK if deleted correctly, or RETCODE_ERROR otherwise.
   */
  delete_subscriber(subscriber: Subscriber): ReturnCode

  /**
   * Creates a Topic in this Participant.
   * @param topic_name - Name of the Topic.
   * @param type_name - Data type of the Topic.
   * @param qos - Topic QoS.
   * @param listener - (Optional) TopicListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Topic or null.
   */
  create_topic(
    topic_name: string,
    type_name: string,
    qos: TopicQos,
    listener?: TopicListener | null,
    mask?: StatusMask
  ): Topic | null

  /**
   * Creates a Topic in this Participant using a topic profile.
   * @param topic_name - Name of the Topic.
   * @param type_name - Data type of the Topic.
   * @param profile_name - Topic profile name.
   * @param listener - (Optional) TopicListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created Topic or null.
   */
  create_topic_with_profile(
    topic_name: string,
    type_name: string,
    profile_name: string,
    listener?: TopicListener | null,
    mask?: StatusMask
  ): Topic | null

  /**
   * Deletes an existing Topic.
   * @param topic - The Topic to be deleted.
   * @returns RETCODE_BAD_PARAMETER if the topic is null, RETCODE_PRECONDITION_NOT_MET if the topic does not belong to this participant or is still referenced, or RETCODE_OK if deleted.
   */
  delete_topic(topic: Topic): ReturnCode

  /**
   * Creates a ContentFilteredTopic in this Participant.
   * @param name - Name of the ContentFilteredTopic.
   * @param related_topic - Related Topic to subscribe to.
   * @param filter_expression - Logic expression to create the filter.
   * @param expression_parameters - Parameters for filtering.
   * @returns A pointer to the created ContentFilteredTopic or null.
   */
  create_contentfilteredtopic(
    name: string,
    related_topic: Topic,
    filter_expression: string,
    expression_parameters: string[]
  ): ContentFilteredTopic | null

  /**
   * Creates a ContentFilteredTopic in this Participant using a custom filter.
   * @param name - Name of the ContentFilteredTopic.
   * @param related_topic - Related Topic to subscribe to.
   * @param filter_expression - Logic expression to create the filter.
   * @param expression_parameters - Parameters for filtering.
   * @param filter_class_name - Name of the custom filter class.
   * @returns A pointer to the created ContentFilteredTopic or null.
   */
  create_contentfilteredtopic(
    name: string,
    related_topic: Topic,
    filter_expression: string,
    expression_parameters: string[],
    filter_class_name: string
  ): ContentFilteredTopic | null

  /**
   * Deletes an existing ContentFilteredTopic.
   * @param a_contentfilteredtopic - The ContentFilteredTopic to be deleted.
   * @returns RETCODE_BAD_PARAMETER if the topic is null, RETCODE_PRECONDITION_NOT_MET if the topic does not belong to this participant or is still referenced, or RETCODE_OK if deleted.
   */
  delete_contentfilteredtopic(a_contentfilteredtopic: ContentFilteredTopic): ReturnCode

  /**
   * Creates a MultiTopic in this Participant.
   * @param name - Name of the MultiTopic.
   * @param type_name - Result type of the MultiTopic.
   * @param subscription_expression - Logic expression to combine filters.
   * @param expression_parameters - Parameters for subscription filtering.
   * @returns A pointer to the created MultiTopic or null on error.
   */
  create_multitopic(
    name: string,
    type_name: string,
    subscription_expression: string,
    expression_parameters: string[]
  ): MultiTopic | null

  /**
   * Deletes an existing MultiTopic.
   * **Warning:** Not supported yet. Currently returns RETCODE_UNSUPPORTED.
   * @param a_multitopic - The MultiTopic to be deleted.
   * @returns RETCODE_BAD_PARAMETER if the topic is null, RETCODE_PRECONDITION_NOT_MET if invalid, or RETCODE_OK if deleted.
   */
  delete_multitopic(a_multitopic: MultiTopic): ReturnCode

  /**
   * Gives access to an existing (or soon-to-exist) enabled Topic.
   * @param topic_name - Name of the Topic.
   * @param timeout - Maximum time (as a Duration) to wait.
   * @returns A pointer to the existing Topic or null if error/timeout.
   */
  find_topic(topic_name: string, timeout: Duration): Topic | null

  /**
   * Looks up an existing, locally created TopicDescription by name.
   * @param topic_name - Name of the TopicDescription.
   * @returns A pointer to the TopicDescription or null if not found.
   */
  lookup_topicdescription(topic_name: string): TopicDescription | null

  /**
   * Allows access to the builtin Subscriber.
   * @returns A pointer to the builtin Subscriber or null on error.
   */
  get_builtin_subscriber(): Subscriber | null

  // --- Ignore Operations ---

  /**
   * Locally ignore a remote domain participant.
   * **Note:** This action is not reversible.
   * @param handle - Identifier of the remote participant.
   * @returns RETURN_OK if successful, or RETCODE_BAD_PARAMETER otherwise.
   */
  ignore_participant(handle: InstanceHandle): ReturnCode

  /**
   * Locally ignore a topic.
   * **Warning:** Not supported yet. Currently returns RETCODE_UNSUPPORTED.
   * @param handle - Identifier of the topic.
   * @returns RETURN_OK if successful, or an error code otherwise.
   */
  ignore_topic(handle: InstanceHandle): ReturnCode

  /**
   * Locally ignore a remote datawriter.
   * **Warning:** Not supported yet. Currently returns RETCODE_UNSUPPORTED.
   * @param handle - Identifier of the datawriter.
   * @returns RETURN_OK if successful, or an error code otherwise.
   */
  ignore_publication(handle: InstanceHandle): ReturnCode

  /**
   * Locally ignore a remote datareader.
   * **Warning:** Not supported yet. Currently returns RETCODE_UNSUPPORTED.
   * @param handle - Identifier of the datareader.
   * @returns RETURN_OK if successful, or an error code otherwise.
   */
  ignore_subscription(handle: InstanceHandle): ReturnCode

  // --- Miscellaneous Operations ---

  /**
   * Retrieves the domain_id used to create this DomainParticipant.
   * @returns The Participant’s domain_id.
   */
  get_domain_id(): DomainId

  /**
   * Deletes all entities created by this DomainParticipant.
   * @returns RETURN_OK if successful, or an error code otherwise.
   */
  delete_contained_entities(): ReturnCode

  /**
   * Manually asserts the liveliness of the DomainParticipant.
   * @returns RETCODE_OK if liveliness was asserted, or RETCODE_ERROR otherwise.
   */
  assert_liveliness(): ReturnCode

  // --- Default QoS for Publishers and Subscribers ---

  /**
   * Sets a default value for the Publisher QoS policies for newly created Publishers.
   * @param qos - PublisherQos to be set.
   * @returns RETCODE_INCONSISTENT_POLICY if not self consistent, or RETCODE_OK if successful.
   */
  set_default_publisher_qos(qos: PublisherQos): ReturnCode

  /**
   * Retrieves the default Publisher QoS.
   * @returns The current default PublisherQos.
   */
  get_default_publisher_qos(): PublisherQos
  /**
   * Retrieves the default Publisher QoS.
   * @param qos - PublisherQos reference where the default is returned.
   * @returns RETCODE_OK.
   */
  get_default_publisher_qos(qos: PublisherQos): ReturnCode

  /**
   * Retrieves the default Topic QoS.
   * Returns the current default TopicQos.
   */
  get_default_topic_qos(): TopicQos

  /**
   * Retrieves the default Topic QoS and writes it into the provided qos object.
   * @param qos - TopicQos reference where the default topic QoS is returned.
   * @returns RETCODE_OK if the operation was successful.
   */
  get_default_topic_qos(qos: TopicQos): ReturnCode

  /**
   * Fills the PublisherQos with the values from the specified XML profile.
   * @param profile_name - Publisher profile name.
   * @param qos - PublisherQos object where the values are returned.
   * @returns RETCODE_OK if the profile exists, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_publisher_qos_from_profile(profile_name: string, qos: PublisherQos): ReturnCode

  /**
   * Fills the PublisherQos with the first publisher profile found in the provided XML.
   * @param xml - Raw XML string.
   * @param qos - PublisherQos object where the values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_publisher_qos_from_xml(xml: string, qos: PublisherQos): ReturnCode
  /**
   * Fills the PublisherQos with the profile identified by profile_name from the provided XML.
   * @param xml - Raw XML string.
   * @param qos - PublisherQos object where the values are returned.
   * @param profile_name - Publisher profile name.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_publisher_qos_from_xml(xml: string, qos: PublisherQos, profile_name: string): ReturnCode

  /**
   * Fills the PublisherQos with the default publisher profile found in the provided XML.
   * **Note:** Does not update the default publisher QoS.
   * @param xml - Raw XML string.
   * @param qos - PublisherQos object where the values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_default_publisher_qos_from_xml(xml: string, qos: PublisherQos): ReturnCode

  /**
   * Sets a default value for the Subscriber QoS policies for newly created Subscribers.
   * @param qos - SubscriberQos to be set.
   * @returns RETCODE_INCONSISTENT_POLICY if not self consistent, or RETCODE_OK if successful.
   */
  set_default_subscriber_qos(qos: SubscriberQos): ReturnCode

  /**
   * Retrieves the default Subscriber QoS.
   * @returns The current default SubscriberQos.
   */
  get_default_subscriber_qos(): SubscriberQos
  /**
   * Retrieves the default Subscriber QoS.
   * @param qos - SubscriberQos reference where the default is returned.
   * @returns RETCODE_OK.
   */
  get_default_subscriber_qos(qos: SubscriberQos): ReturnCode

  /**
   * Fills the SubscriberQos with the values from the specified XML profile.
   * @param profile_name - Subscriber profile name.
   * @param qos - SubscriberQos object where the values are returned.
   * @returns RETCODE_OK if the profile exists, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_subscriber_qos_from_profile(profile_name: string, qos: SubscriberQos): ReturnCode

  /**
   * Fills the SubscriberQos with the first subscriber profile found in the provided XML.
   * @param xml - Raw XML string.
   * @param qos - SubscriberQos object where the values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_subscriber_qos_from_xml(xml: string, qos: SubscriberQos): ReturnCode
  /**
   * Fills the SubscriberQos with the profile identified by profile_name from the provided XML.
   * @param xml - Raw XML string.
   * @param qos - SubscriberQos object where the values are returned.
   * @param profile_name - Subscriber profile name.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_subscriber_qos_from_xml(xml: string, qos: SubscriberQos, profile_name: string): ReturnCode
}
