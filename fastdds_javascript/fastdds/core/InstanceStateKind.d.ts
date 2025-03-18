/**
 * InstanceStateKind indicates the state of a DDS instance.
 * It is used to determine the liveliness and validity of data samples received by a DataReader.
 *
 * Example usage:
 * if (info.instance_state === Fastdds.ALIVE_INSTANCE_STATE && info.valid_data) {
 *   // The instance is active and the sample data is valid.
 * }
 */
export enum InstanceStateKind {
  ALIVE_INSTANCE_STATE, // defaults to 0
  NOT_ALIVE_DISPOSED_INSTANCE_STATE, // defaults to 1
  NOT_ALIVE_NO_WRITERS_INSTANCE_STATE // defaults to 2
}

/**
 * Constant representing an active instance.
 * Use this to check if an instance is alive.
 */
export const ALIVE_INSTANCE_STATE: InstanceStateKind

/**
 * Constant representing an instance that has been disposed.
 * This value indicates that the instance is no longer active due to a disposal operation.
 */
export const NOT_ALIVE_DISPOSED_INSTANCE_STATE: InstanceStateKind

/**
 * Constant representing an instance with no active writers.
 * Use this value to determine if an instance is inactive because there are no writers publishing data.
 */
export const NOT_ALIVE_NO_WRITERS_INSTANCE_STATE: InstanceStateKind
