/**
 * SubscriptionMatchedStatus holds information about the matching status of a DataReader.
 * It is updated every time the DataReader matches (or loses) a DataWriter.
 */
export class SubscriptionMatchedStatus {
  /**
   * Total cumulative count of remote DataWriters discovered publishing on the same Topic
   * with a common partition and compatible QoS. This value includes DataWriters that may not
   * be currently matched.
   */
  total_count: number

  /**
   * The change in total_count since the last time the status was read or on_subscription_matched() was called.
   * This value can only be zero or positive.
   */
  total_count_change: number

  /**
   * The number of remote DataWriters currently matched to the DataReader.
   */
  current_count: number

  /**
   * The change in current_count since the last time the status was read or on_subscription_matched() was called.
   * This value can be positive or negative.
   */
  current_count_change: number

  /**
   * Handle to the last DataWriter that matched the DataReader.
   * If no matching ever occurred, this value is c_InstanceHandle_Unknown.
   */
  last_publication_handle: InstanceHandle

  constructor()
}
