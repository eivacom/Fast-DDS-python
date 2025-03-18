/**
 * Contains all the possible QoS policies for a DomainParticipant.
 * See the Fast DDS documentation for implementation details and default values.
 */
export class DomainParticipantQos {
  // --- Public Types ---
  // User defined flow controllers to use alongside.
  // Assumed to be defined elsewhere:
  // type FlowControllerDescriptorList = Array<FlowControllerDescriptor>;

  // --- Constructor and Destructor ---
  constructor()
  // (destructor is not modeled in TypeScript)

  // --- QoS Policies ---

  /** Getter for UserDataQosPolicy (const). */
  user_data(): UserDataQosPolicy

  /** Setter for UserDataQosPolicy. */
  set_user_data(value: UserDataQosPolicy): void

  /** Getter for EntityFactoryQosPolicy (const). */
  entity_factory(): EntityFactoryQosPolicy
  /** Getter for EntityFactoryQosPolicy (mutable). */
  entity_factory(): EntityFactoryQosPolicy
  /** Setter for EntityFactoryQosPolicy. */
  set_entity_factory(value: EntityFactoryQosPolicy): void

  /** Getter for ParticipantResourceLimitsQos (const). */
  allocation(): ParticipantResourceLimitsQos
  /** Getter for ParticipantResourceLimitsQos (mutable). */
  allocation(): ParticipantResourceLimitsQos
  /** Setter for ParticipantResourceLimitsQos. */
  set_allocation(allocation: ParticipantResourceLimitsQos): void

  /** Getter for PropertyPolicyQos (const). */
  properties(): PropertyPolicyQos
  /** Getter for PropertyPolicyQos (mutable). */
  properties(): PropertyPolicyQos
  /** Setter for PropertyPolicyQos. */
  set_properties(properties: PropertyPolicyQos): void

  /** Getter for WireProtocolConfigQos (const). */
  wire_protocol(): WireProtocolConfigQos
  /** Getter for WireProtocolConfigQos (mutable). */
  wire_protocol(): WireProtocolConfigQos
  /** Setter for WireProtocolConfigQos. */
  set_wire_protocol(wire_protocol: WireProtocolConfigQos): void

  /** Getter for TransportConfigQos (const). */
  transport(): TransportConfigQos
  /** Getter for TransportConfigQos (mutable). */
  transport(): TransportConfigQos
  /** Setter for TransportConfigQos. */
  set_transport(transport: TransportConfigQos): void

  /** Getter for the Participant name (const). */
  name(): fastcdr_string_255
  /** Getter for the Participant name (mutable). */
  name(): fastcdr_string_255
  /** Setter for the Participant name. */
  set_name(value: fastcdr_string_255): void

  /** Getter for the flow controllers list (mutable). */
  flow_controllers(): FlowControllerDescriptorList
  /** Getter for the flow controllers list (const). */
  flow_controllers(): FlowControllerDescriptorList

  /** Compares the flow controllers of two DomainParticipantQos objects element-wise. */
  compare_flow_controllers(qos: DomainParticipantQos): boolean

  // --- Thread Settings ---
  // Getters and setters for various ThreadSettings from the rtps namespace:
  builtin_controllers_sender_thread(): rtps_ThreadSettings
  set_builtin_controllers_sender_thread(value: rtps_ThreadSettings): void

  timed_events_thread(): rtps_ThreadSettings
  set_timed_events_thread(value: rtps_ThreadSettings): void

  discovery_server_thread(): rtps_ThreadSettings
  set_discovery_server_thread(value: rtps_ThreadSettings): void

  typelookup_service_thread(): rtps_ThreadSettings
  set_typelookup_service_thread(value: rtps_ThreadSettings): void

  security_log_thread(): rtps_ThreadSettings
  set_security_log_thread(value: rtps_ThreadSettings): void

  // --- Utility Methods ---
  /**
   * Provides a way of easily configuring transport-related configuration on certain pre-defined scenarios.
   * @param transports - Defines the transport configuration scenario to setup.
   * @param options - (Optional) Options to be used in the transport configuration.
   */
  setup_transports(
    transports: rtps_BuiltinTransports,
    options?: rtps_BuiltinTransportsOptions
  ): void

  // --- Static Members ---

  /** Default DomainParticipantQos instance. */
  static PARTICIPANT_QOS_DEFAULT: DomainParticipantQos
}
