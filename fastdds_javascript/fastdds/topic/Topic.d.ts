import { DomainEntity } from '../core/DomainEntity'

/**
 * Topic represents the global concept of a DDS Topic.
 * It encapsulates the topic name, type, and associated QoS policies.
 */
export class Topic extends DomainEntity {
  /**
   * Returns the name of the Topic.
   * @returns The topic name as a string.
   */
  get_name(): string

  /**
   * Returns the type name of the Topic.
   * @returns The topic type name as a string.
   */
  get_type_name(): string

  /**
   * Retrieves the Topic QoS policies and writes them into the provided qos object.
   * @param qos - A TopicQos reference where the current QoS will be returned.
   * @returns RETCODE_OK if the operation is successful.
   */
  get_qos(qos: TopicQos): ReturnCode

  /**
   * Retrieves the current Topic QoS policies.
   * @returns The current TopicQos.
   */
  get_qos(): TopicQos

  /**
   * Sets the Topic QoS policies.
   * @param qos - The new TopicQos to be set.
   * @returns RETCODE_OK if the QoS is set correctly, or an error code otherwise.
   */
  set_qos(qos: TopicQos): ReturnCode

  /**
   * Returns the TopicListener associated with this Topic.
   * @returns The TopicListener pointer or null if none is set.
   */
  get_listener(): TopicListener | null

  /**
   * Sets the TopicListener for this Topic.
   * Optionally, a StatusMask can be provided to indicate which statuses the listener should respond to.
   * @param listener - The new TopicListener (or null to remove it).
   * @param mask - (Optional) A StatusMask specifying the statuses of interest.
   * @param timeout - (Optional) Maximum time (in seconds) to wait for callbacks to finish.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  set_listener(listener: TopicListener | null, mask?: StatusMask, timeout?: number): ReturnCode
}
