import { Condition } from './Condition'
/**
 * ConditionSeq is a container for Condition pointers.
 * It is used to store and return the triggered Conditions from a Waitset.
 */
export class ConditionSeq extends Condition {
  private conditions: Condition[] = []

  constructor(): Condition[]

  /**
   * Returns the number of Conditions in the sequence.
   */
  size(): number {
    return this.conditions.length
  }

  /**
   * Adds a new Condition to the sequence.
   * @param condition - The Condition to add.
   */
  push(condition: Condition): void {
    this.conditions.push(condition)
  }

  /**
   * Retrieves the Condition at the specified index.
   * @param index - The index of the Condition.
   * @returns The Condition, or undefined if index is out of bounds.
   */
  get(index: number): Condition | undefined {
    return this.conditions[index]
  }

  /**
   * Clears all Conditions from the sequence.
   */
  clear(): void {
    this.conditions = []
  }

  /**
   * Returns a copy of the internal array.
   */
  toArray(): Condition[] {
    return this.conditions.slice()
  }
}
