import { StatusMask } from '../status/StatusMask'
/**
 * Entity is the abstract base class for all DDS objects that support QoS policies,
 * a listener, and a status condition.
 * It is subclassed by classes such as DomainEntity and DomainParticipant.
 */
export abstract class Entity {
  /**
   * Constructs a new Entity.
   * @param mask - A StatusMask indicating the relevant statuses for the entity.
   *               Defaults to StatusMask.all() if not provided.
   */
  constructor(mask?: StatusMask)

  /**
   * Enables the Entity.
   * Must be called before the entity is used for publishing or subscribing.
   * @returns RETCODE_OK if the operation is successful.
   */
  abstract enable(): ReturnCode

  /**
   * Disables the Entity and performs any necessary cleanup before closing it.
   */
  close(): void

  /**
   * Retrieves the set of relevant statuses for this Entity.
   * @returns A StatusMask with the relevant statuses set to 1.
   */
  get_status_mask(): StatusMask

  /**
   * Retrieves the set of triggered statuses for this Entity.
   * Triggered statuses are those that have changed since the last status read.
   * @returns A StatusMask with the triggered statuses set to 1.
   */
  get_status_changes(): StatusMask

  /**
   * Retrieves the unique instance handle representing this Entity.
   * @returns The InstanceHandle for this Entity.
   */
  get_instance_handle(): InstanceHandle

  /**
   * Checks whether the Entity is enabled.
   * @returns True if the entity is enabled, false otherwise.
   */
  is_enabled(): boolean

  /**
   * Provides access to the StatusCondition associated with this Entity.
   * This condition reflects the statuses of the Entity.
   * @returns The StatusCondition object for this Entity.
   */
  get_statuscondition(): StatusCondition
}
