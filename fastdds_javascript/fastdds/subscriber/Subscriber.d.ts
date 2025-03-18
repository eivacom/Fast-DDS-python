import { DomainEntity } from '../core/DomainEntity'
import { DataReader } from './DataReader'

export class Subscriber extends DomainEntity {
  constructor()

  /**
   * Retrieves the current Subscriber QoS.
   * @returns The current SubscriberQos.
   */
  get_qos(): SubscriberQos

  /**
   * Sets the Subscriber QoS.
   * @param qos - The new SubscriberQos to set.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  set_qos(qos: SubscriberQos): ReturnCode

  /**
   * Creates a DataReader for the given topic.
   * @param topic - The TopicDescription for the topic.
   * @param qos - The DataReader QoS to use.
   * @param listener - (Optional) A DataReaderListener.
   * @param mask - (Optional) A StatusMask (default: all).
   * @returns A pointer to the created DataReader or null if not created.
   */
  create_datareader(
    topic: TopicDescription,
    qos: DataReaderQos,
    listener?: DataReaderListener | null,
    mask?: StatusMask
  ): DataReader | null

  /**
   * Creates a DataReader for the given topic using a profile.
   * @param topic - The TopicDescription for the topic.
   * @param profile_name - The name of the DataReader profile to use.
   * @param listener - (Optional) A DataReaderListener.
   * @param mask - (Optional) A StatusMask (default: all).
   * @returns A pointer to the created DataReader or null if not created.
   */
  create_datareader_with_profile(
    topic: TopicDescription,
    profile_name: string,
    listener?: DataReaderListener | null,
    mask?: StatusMask
  ): DataReader | null

  /**
   * Deletes an existing DataReader.
   * @param reader - The DataReader to delete.
   * @returns RETCODE_OK if deletion was successful, or an error code otherwise.
   */
  delete_datareader(reader: DataReader): ReturnCode

  /**
   * Retrieves the default DataReader QoS.
   * @returns The current default DataReaderQos.
   */
  get_default_datareader_qos(): DataReaderQos

  /**
   * Retrieves the default DataReader QoS and writes it into the provided qos object.
   * @param qos - A DataReaderQos reference where the default QoS is returned.
   * @returns RETCODE_OK if successful.
   */
  get_default_datareader_qos(qos: DataReaderQos): ReturnCode

  /**
   * Returns the DomainParticipant that created this Subscriber.
   */
  get_participant(): DomainParticipant

  /**
   * Returns the instance handle associated with this Subscriber.
   */
  get_instance_handle(): InstanceHandle
}
