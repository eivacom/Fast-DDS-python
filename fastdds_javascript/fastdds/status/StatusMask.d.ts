export class StatusMask {
  /**
   * Constructs a new StatusMask.
   * If a numeric value is provided, it initializes the mask with that value.
   */
  constructor()
  constructor(mask: number)

  /**
   * Returns the numeric value of this StatusMask.
   */
  value(): number
  /**
   * Sets the numeric value of this StatusMask.
   * @param mask - The new mask value.
   */
  setValue(mask: number): void

  /**
   * Returns a new StatusMask that is the bitwise OR of this mask and the other.
   * @param other - Another StatusMask.
   * @returns The combined StatusMask.
   */
  or(other: StatusMask): StatusMask

  /**
   * Returns a new StatusMask that is the bitwise AND of this mask and the other.
   * @param other - Another StatusMask.
   * @returns The intersected StatusMask.
   */
  and(other: StatusMask): StatusMask

  /**
   * Checks whether this StatusMask is equal to another.
   * @param other - Another StatusMask.
   * @returns True if equal, false otherwise.
   */
  equals(other: StatusMask): boolean

  /**
   * Performs a bitwise OR assignment on this StatusMask with another.
   * @param other - Another StatusMask.
   * @returns This StatusMask after modification.
   */
  orEquals(other: StatusMask): this

  /**
   * Performs a bitwise AND assignment on this StatusMask with another.
   * @param other - Another StatusMask.
   * @returns This StatusMask after modification.
   */
  andEquals(other: StatusMask): this

  /**
   * Checks if the specified status is active (i.e., set to 1) in this StatusMask.
   * @param status - A StatusMask representing the status to check.
   * @returns True if the status is active, false otherwise.
   */
  is_active(status: StatusMask): boolean

  /**
   * Returns a StatusMask with all possible status flags set.
   */
  static all(): StatusMask

  /**
   * Returns a StatusMask with no status flags set.
   */
  static none(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::InconsistentTopicStatus.
   */
  static inconsistent_topic(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::OfferedDeadlineMissedStatus.
   */
  static offered_deadline_missed(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::RequestedDeadlineMissedStatus.
   */
  static requested_deadline_missed(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::OfferedIncompatibleQosStatus.
   */
  static offered_incompatible_qos(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::RequestedIncompatibleQosStatus.
   */
  static requested_incompatible_qos(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::SampleLostStatus.
   */
  static sample_lost(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::SampleRejectedStatus.
   */
  static sample_rejected(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::data_on_readers.
   */
  static data_on_readers(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::data_available.
   */
  static data_available(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::LivelinessLostStatus.
   */
  static liveliness_lost(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::LivelinessChangedStatus.
   */
  static liveliness_changed(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::PublicationMatchedStatus.
   */
  static publication_matched(): StatusMask

  /**
   * Returns the StatusMask associated with dds::core::status::SubscriptionMatchedStatus.
   */
  static subscription_matched(): StatusMask
}
