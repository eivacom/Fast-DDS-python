import { StatusCondition } from './StatusCondition'

/**
 * Condition is the abstract base class for all conditions in Fast DDS.
 * It supports QoS-based status notifications and is used in conjunction with WaitSets.
 */
export abstract class Condition {
  /**
   * Enables the Condition.
   * @returns RETCODE_OK if the operation succeeds.
   */
  abstract enable(): ReturnCode

  /**
   * Retrieves the StatusMask for this Condition.
   * The returned StatusMask indicates which status changes can trigger the condition.
   * @returns The current StatusMask.
   */
  abstract get_status_mask(): StatusMask

  /**
   * Attempts to cast the given Condition to a StatusCondition.
   * If the Condition is actually a StatusCondition, returns it; otherwise, returns null.
   *
   * Example usage:
   * const status_cond = Fastdds.Condition.as_StatusConditions(cond);
   * if (status_cond && dataReader) {
   *   const entity = status_cond.get_entity();
   *   // ...
   * }
   *
   * @param cond - A Condition instance.
   * @returns The StatusCondition if available, or null.
   */
  static as_StatusConditions(cond: Condition): StatusCondition | null
}
