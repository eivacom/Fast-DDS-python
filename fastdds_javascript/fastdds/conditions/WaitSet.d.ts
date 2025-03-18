import { Condition } from './Condition'
import { ConditionSeq } from './ConditionSeq'
/**
 * Waitset provides a mechanism to wait for one or more Conditions to become triggered.
 */
export class WaitSet {
  constructor()

  /**
   * Attaches a Condition to this Waitset.
   * @param condition - The Condition to attach.
   * @returns RETCODE_OK if the operation succeeds, or an error code otherwise.
   */
  attach_condition(condition: Condition): ReturnCode

  /**
   * Detaches a Condition from this Waitset.
   * @param condition - The Condition to detach.
   * @returns RETCODE_OK if the operation succeeds, or an error code otherwise.
   */
  detach_condition(condition: Condition): ReturnCode

  /**
   * Waits for one or more attached Conditions to become triggered or until the timeout expires.
   * The active_conditions array will be filled with the Conditions that are triggered.
   * @param active_conditions - An array that will receive the triggered Conditions.
   * @param timeout - Maximum duration to wait.
   * @returns RETCODE_OK if one or more Conditions are triggered, or an error code otherwise.
   */
  wait(active_conditions: ConditionSeq, timeout: Duration): ReturnCode
}
