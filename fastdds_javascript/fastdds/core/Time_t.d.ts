/**
 * Time_t represents a time value in Fast DDS.
 * It is typically used for timestamps or durations, with a seconds and nanoseconds component.
 */
export class Time_t {
  /**
   * Seconds component of the time.
   */
  seconds: number

  /**
   * Nanoseconds component of the time.
   */
  nanosec: number

  /**
   * Constructs a new Time_t instance.
   * If no parameters are provided, the time is initialized to zero.
   * @param seconds - (Optional) The seconds component.
   * @param nanosec - (Optional) The nanoseconds component.
   */
  constructor(seconds?: number, nanosec?: number)

  /**
   * Compares this Time_t with another for equality.
   * @param other - The other Time_t instance.
   * @returns True if both the seconds and nanosec components are equal.
   */
  equals(other: Time_t): boolean

  /**
   * Determines if this Time_t is less than another.
   * @param other - The other Time_t instance.
   * @returns True if this time is earlier than the other.
   */
  lessThan(other: Time_t): boolean

  /**
   * Returns a string representation of the Time_t.
   * @returns A string in the format "seconds.nanosec".
   */
  toString(): string
}
