import { Condition } from './Condition'
/**
 * GuardCondition is a specialized Condition that can be manually triggered
 * to notify a waitset of an external event.
 */
export class GuardCondition extends Condition {
  constructor()

  /**
   * Sets the trigger value for this GuardCondition.
   * When set to true, the condition is activated (triggered).
   * @param value - The new trigger value.
   * @returns RETCODE_OK if the operation succeeds, or an error code otherwise.
   */
  set_trigger_value(value: boolean): ReturnCode

  /**
   * Gets the current trigger value of this GuardCondition.
   * @returns true if the condition is currently triggered, false otherwise.
   */
  get_trigger_value(): boolean
}
