import { Entity } from '../core/Entity'
/**
 * StatusCondition is a specialized Condition associated with an Entity.
 * It allows enabling/disabling monitoring for specific status changes via a StatusMask.
 */
export class StatusCondition extends Condition {
  /**
   * Retrieves the Entity associated with this StatusCondition.
   * @returns The Entity object tied to this condition.
   */
  get_entity(): Entity

  /**
   * Sets the enabled statuses for this StatusCondition.
   * Only the statuses whose bits are set in the provided StatusMask will trigger the condition.
   * @param mask - A StatusMask specifying which statuses to enable.
   * @returns The updated StatusCondition.
   */
  set_enabled_statuses(mask: StatusMask): StatusCondition

  /**
   * Retrieves the enabled statuses for this StatusCondition.
   * @returns A reference to the StatusMask containing the enabled statuses.
   */
  get_enabled_statuses(): StatusMask
}
