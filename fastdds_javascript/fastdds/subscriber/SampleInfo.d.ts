import { InstanceStateKind } from './InstanceStateKind'

/**
 * SampleInfo provides meta-information about a data sample received by a DataReader.
 * It contains information about the validity of the sample, the state of the sample, view,
 * and instance, as well as identifiers and generation counts.
 */
export class SampleInfo {
  /**
   * Indicates whether the data sample contains valid data.
   */
  valid_data: boolean

  /**
   * The sample state (e.g., READ, NOT_READ) of the data sample.
   */
  sample_state: SampleStateKind

  /**
   * The view state (e.g., NEW, NOT_NEW) of the instance associated with this sample.
   */
  view_state: ViewStateKind

  /**
   * The instance state (e.g., ALIVE, NOT_ALIVE_DISPOSED, NOT_ALIVE_NO_WRITERS) of the instance.
   */
  instance_state: InstanceStateKind

  /**
   * The handle associated with the instance of this sample.
   */
  instance_handle: InstanceHandle

  /**
   * The source timestamp indicating when the sample was generated.
   */
  source_timestamp: Time_t

  /**
   * The total cumulative count of times the instance has been disposed.
   */
  disposed_generation_count: number

  /**
   * The total cumulative count of times the instance has had no writers.
   */
  no_writers_generation_count: number

  /**
   * The rank (position) of this sample among those received for the instance.
   */
  sample_rank: number

  /**
   * The generation rank of the instance.
   */
  generation_rank: number

  constructor()
}
