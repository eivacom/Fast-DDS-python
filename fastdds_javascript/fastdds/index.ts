import path from 'path'
import { Condition } from './conditions/Condition'
import { ConditionSeq } from './conditions/ConditionSeq'
import { GuardCondition } from './conditions/GuardCondition'
import { StatusCondition } from './conditions/StatusCondition'
import { WaitSet } from './conditions/WaitSet'
import {
  ALIVE_INSTANCE_STATE,
  NOT_ALIVE_DISPOSED_INSTANCE_STATE,
  NOT_ALIVE_NO_WRITERS_INSTANCE_STATE
} from './core/InstanceStateKind'
import { Time_t } from './core/Time_t'
import { DomainParticipant } from './domain/DomainParticipant'
import { DomainParticipantFactory } from './domain/DomainParticipantFactory'
import { DomainParticipantQos } from './domain/DomainParticipantQos'
import { StatusMask } from './status/StatusMask'
import { SubscriptionMatchedStatus } from './status/SubscriptionMatchedStatus'
import { SampleInfo } from './subscriber/SampleInfo'
import { Subscriber } from './subscriber/Subscriber'
import { Topic } from './topic/Topic'
import { TypeSupport } from './topic/TypeSupport'

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Fastdds {
  /**
   * Represents a return code from Fast DDS operations.
   * Typically, operations return RETCODE_OK if they completed successfully,
   * or another code to indicate a specific error or precondition failure.
   */
  export type ReturnCode = number

  /**
   * RETCODE_OK indicates that the operation completed successfully.
   * Use this constant to check the outcome of API calls.
   *
   * Example:
   * const ret: Fastdds.ReturnCode = someOperation();
   * if (ret === Fastdds.RETCODE_OK) {
   *   // Operation succeeded
   * }
   */
  export const RETCODE_OK: ReturnCode

  /**
   * c_TimeInfinite represents an infinite time value.
   * Use this constant as a timeout parameter (e.g., in wait_set.wait(..., c_TimeInfinite))
   * to indicate that the operation should wait indefinitely until a condition is triggered.
   */
  export const c_TimeInfinite: Time_t

  /**
   * c_TimeZero represents a zero time value.
   * This value is typically used to perform non-blocking operations or immediate checks,
   * where the operation should not wait if the condition is not immediately triggered.
   */
  export const c_TimeZero: Time_t

  /**
   * c_TimeInvalid represents an invalid or uninitialized time value.
   * It is used to denote that a time value is not set or is otherwise not valid.
   * In code, this can help check for errors or uninitialized time parameters.
   */
  export const c_TimeInvalid: Time_t

  /**
   * Default Topic QoS.
   * Provides the default Quality of Service settings for Topic entities.
   * These default values are used when creating a new topic or when no user-defined QoS is set.
   */
  export const TOPIC_QOS_DEFAULT: never

  /**
   * Default DataReader QoS.
   * Provides the default Quality of Service settings for DataReader entities.
   * This constant is used when creating a new data reader or retrieving the default QoS for data readers.
   */
  export const DATAREADER_QOS_DEFAULT: never

  /**
   * Default Subscriber QoS.
   * Provides the default Quality of Service settings for Subscriber entities.
   * This constant is used when creating a new subscriber or retrieving the default subscriber QoS.
   */
  export const SUBSCRIBER_QOS_DEFAULT: never

  export {
    DomainParticipant,
    DomainParticipantFactory,
    TypeSupport,
    DomainParticipantQos,
    StatusMask,
    Condition,
    GuardCondition,
    WaitSet,
    Subscriber,
    ConditionSeq,
    SubscriptionMatchedStatus,
    SampleInfo,
    ALIVE_INSTANCE_STATE,
    NOT_ALIVE_DISPOSED_INSTANCE_STATE,
    NOT_ALIVE_NO_WRITERS_INSTANCE_STATE,
    Topic,
    StatusCondition
  }
}

const fastdds = require(path.join(__dirname, '..', 'fastdds', 'fastdds.node')) as typeof Fastdds
export default fastdds
