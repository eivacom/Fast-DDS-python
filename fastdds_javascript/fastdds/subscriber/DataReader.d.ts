import { DomainEntity } from '../core/DomainEntity'
import { SubscriptionMatchedStatus } from '../status/SubscriptionMatchedStatus'

/**
 * DataReader is responsible for receiving samples published on a Topic.
 * It provides methods for reading and taking data samples, both for all samples
 * and for specific instances.
 */
export class DataReader extends DomainEntity {
  constructor()

  /**
   * Retrieves the current DataReader QoS policies.
   * Overload 1: Writes the current QoS into the provided object.
   * @param qos - The DataReaderQos object to be filled.
   * @returns RETCODE_OK if successful.
   */
  get_qos(qos: DataReaderQos): ReturnCode

  /**
   * Retrieves the current DataReader QoS policies.
   * Overload 2: Returns a copy of the current DataReaderQos.
   */
  get_qos(): DataReaderQos

  /**
   * Sets the DataReader QoS policies.
   * @param qos - The new DataReaderQos to be set.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  set_qos(qos: DataReaderQos): ReturnCode

  /**
   * Returns the DataReaderListener associated with this DataReader.
   */
  get_listener(): DataReaderListener | null

  /**
   * Sets the DataReaderListener for this DataReader.
   * Optionally, a StatusMask and a timeout (in seconds) can be provided.
   * @param listener - The new DataReaderListener (or null to remove it).
   * @param mask - (Optional) A StatusMask indicating the statuses the listener should handle.
   * @param timeout - (Optional) Maximum time (in seconds) to wait for callbacks to complete.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  set_listener(listener: DataReaderListener | null, mask?: StatusMask, timeout?: number): ReturnCode

  /**
   * Reads available samples from this DataReader.
   * The received samples are stored in data_seq and their corresponding SampleInfo in info_seq.
   * @param data_seq - An array that will be filled with data samples.
   * @param info_seq - An array that will be filled with SampleInfo for each data sample.
   * @param max_samples - The maximum number of samples to read.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  read(data_seq: any[], info_seq: SampleInfo[], max_samples: number): ReturnCode

  /**
   * Takes available samples from this DataReader.
   * Similar to read, but the samples are removed from the DataReader after being taken.
   * @param data_seq - An array that will be filled with data samples.
   * @param info_seq - An array that will be filled with SampleInfo for each data sample.
   * @param max_samples - The maximum number of samples to take.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  take(data_seq: any[], info_seq: SampleInfo[], max_samples: number): ReturnCode

  /**
   * Reads samples for a specific instance identified by instance_handle.
   * @param instance_handle - The handle of the instance to read samples for.
   * @param data_seq - An array to receive data samples.
   * @param info_seq - An array to receive the associated SampleInfo.
   * @param max_samples - The maximum number of samples to read.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  read_instance(
    instance_handle: InstanceHandle,
    data_seq: any[],
    info_seq: SampleInfo[],
    max_samples: number
  ): ReturnCode

  /**
   * Takes samples for a specific instance identified by instance_handle.
   * @param instance_handle - The handle of the instance to take samples for.
   * @param data_seq - An array to receive data samples.
   * @param info_seq - An array to receive the associated SampleInfo.
   * @param max_samples - The maximum number of samples to take.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  take_instance(
    instance_handle: InstanceHandle,
    data_seq: any[],
    info_seq: SampleInfo[],
    max_samples: number
  ): ReturnCode

  /**
   * Reads the next sample from this DataReader.
   * @param data - A reference that will be set to the next data sample.
   * @param info - A SampleInfo object that will be set with the sample's meta-information.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  read_next_sample(data: any, info: SampleInfo): ReturnCode

  /**
   * Takes the next sample from this DataReader.
   * @param data - A reference that will be set to the next data sample.
   * @param info - A SampleInfo object that will be set with the sample's meta-information.
   * @returns RETCODE_OK if successful, or an error code otherwise.
   */
  take_next_sample(data: any, info: SampleInfo): ReturnCode

  /**
   * Retrieves the SubscriptionMatchedStatus of this DataReader.
   * The provided status object is filled with the current subscription matched status data.
   * @param status - An output parameter that will hold the SubscriptionMatchedStatus.
   * @returns RETCODE_OK if the operation is successful, or an error code otherwise.
   */
  get_subscription_matched_status(status: SubscriptionMatchedStatus): ReturnCode
}
