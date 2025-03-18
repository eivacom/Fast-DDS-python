import { StatusMask } from '../status/StatusMask'
import { DomainParticipant } from './DomainParticipant'
/**
 * Factory for creating and managing DomainParticipants in Fast DDS.
 */
export class DomainParticipantFactory {
  // --- Participant Creation ---

  /**
   * Creates a Participant.
   * @param domain_id - Domain Id.
   * @param qos - DomainParticipantQos reference.
   * @param listener - (Optional) DomainParticipantListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant(
    domain_id: DomainId,
    qos: DomainParticipantQos,
    listener?: DomainParticipantListener | null,
    mask?: StatusMask
  ): DomainParticipant | null

  /**
   * Creates a Participant.
   * @param extended_qos - DomainParticipantExtendedQos reference.
   * @param listener - (Optional) DomainParticipantListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant(
    extended_qos: DomainParticipantExtendedQos,
    listener?: DomainParticipantListener | null,
    mask?: StatusMask
  ): DomainParticipant | null

  /**
   * Creates a Participant with default domain id and QoS.
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant_with_default_profile(): DomainParticipant | null
  /**
   * Creates a Participant with default domain id and QoS.
   * @param listener - DomainParticipantListener pointer.
   * @param mask - StatusMask.
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant_with_default_profile(
    listener: DomainParticipantListener,
    mask: StatusMask
  ): DomainParticipant | null

  /**
   * Creates a Participant.
   * @param domain_id - Domain Id.
   * @param profile_name - Participant profile name.
   * @param listener - (Optional) DomainParticipantListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant_with_profile(
    domain_id: DomainId,
    profile_name: string,
    listener?: DomainParticipantListener | null,
    mask?: StatusMask
  ): DomainParticipant | null

  /**
   * Creates a Participant.
   * @param profile_name - Participant profile name.
   * @param listener - (Optional) DomainParticipantListener pointer (default: null).
   * @param mask - (Optional) StatusMask (default: all).
   * @returns A pointer to the created DomainParticipant or null if not created.
   */
  create_participant_with_profile(
    profile_name: string,
    listener?: DomainParticipantListener | null,
    mask?: StatusMask
  ): DomainParticipant | null

  // --- Lookup Operations ---

  /**
   * Retrieves a previously created DomainParticipant for the specified domain_id.
   * If multiple exist, one is returned (unspecified which one).
   * @param domain_id - Domain Id.
   * @returns A pointer to the DomainParticipant or null.
   */
  lookup_participant(domain_id: DomainId): DomainParticipant | null

  /**
   * Retrieves all DomainParticipants belonging to the specified domain_id.
   * @param domain_id - Domain Id.
   * @returns An array of DomainParticipant pointers.
   */
  lookup_participants(domain_id: DomainId): DomainParticipant[]

  // --- Default QoS for Participants ---

  /**
   * Retrieves the default DomainParticipant QoS by writing into the provided qos object.
   * @param qos - DomainParticipantQos where the default values are returned.
   * @returns RETCODE_OK.
   */
  get_default_participant_qos(qos: DomainParticipantQos): ReturnCode

  /**
   * Retrieves the default DomainParticipant QoS.
   * @returns A reference to the default DomainParticipantQos.
   */
  get_default_participant_qos(): DomainParticipantQos

  /**
   * Sets the default DomainParticipant QoS.
   * @param qos - DomainParticipantQos to be set.
   * @returns RETCODE_INCONSISTENT_POLICY if not self consistent, or RETCODE_OK if successful.
   */
  set_default_participant_qos(qos: DomainParticipantQos): ReturnCode

  /**
   * Fills the DomainParticipantQos with values from the XML profile.
   * @param profile_name - DomainParticipant profile name.
   * @param qos - DomainParticipantQos object where values are returned.
   * @returns RETCODE_OK if the profile exists, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_qos_from_profile(profile_name: string, qos: DomainParticipantQos): ReturnCode

  /**
   * Fills the DomainParticipantQos with the first profile found in the provided XML.
   * @param xml - Raw XML string.
   * @param qos - DomainParticipantQos object where values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_qos_from_xml(xml: string, qos: DomainParticipantQos): ReturnCode
  /**
   * Fills the DomainParticipantQos with the profile identified by profile_name from the provided XML.
   * @param xml - Raw XML string.
   * @param qos - DomainParticipantQos object where values are returned.
   * @param profile_name - DomainParticipant profile name.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_qos_from_xml(
    xml: string,
    qos: DomainParticipantQos,
    profile_name: string
  ): ReturnCode

  /**
   * Fills the DomainParticipantQos with the default profile found in the provided XML.
   * **Note:** Does not update the default participant QoS.
   * @param xml - Raw XML string.
   * @param qos - DomainParticipantQos object where values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_default_participant_qos_from_xml(xml: string, qos: DomainParticipantQos): ReturnCode

  // --- Extended QoS Operations ---

  /**
   * Fills the DomainParticipantExtendedQos with values from the XML profile.
   * @param profile_name - DomainParticipant profile name.
   * @param extended_qos - DomainParticipantExtendedQos object where values are returned.
   * @returns RETCODE_OK if the profile exists, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_extended_qos_from_profile(
    profile_name: string,
    extended_qos: DomainParticipantExtendedQos
  ): ReturnCode

  /**
   * Fills the DomainParticipantExtendedQos with the first profile found in the provided XML.
   * @param xml - Raw XML string.
   * @param extended_qos - DomainParticipantExtendedQos object where values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_extended_qos_from_xml(
    xml: string,
    extended_qos: DomainParticipantExtendedQos
  ): ReturnCode
  /**
   * Fills the DomainParticipantExtendedQos with the profile identified by profile_name from the provided XML.
   * @param xml - Raw XML string.
   * @param extended_qos - DomainParticipantExtendedQos object where values are returned.
   * @param profile_name - DomainParticipant profile name.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_participant_extended_qos_from_xml(
    xml: string,
    extended_qos: DomainParticipantExtendedQos,
    profile_name: string
  ): ReturnCode

  /**
   * Fills the DomainParticipantExtendedQos with the default profile found in the provided XML.
   * **Note:** Does not update the default extended QoS.
   * @param xml - Raw XML string.
   * @param extended_qos - DomainParticipantExtendedQos object where values are returned.
   * @returns RETCODE_OK on success, or RETCODE_BAD_PARAMETER otherwise.
   */
  get_default_participant_extended_qos_from_xml(
    xml: string,
    extended_qos: DomainParticipantExtendedQos
  ): ReturnCode

  /**
   * Fills the DomainParticipantExtendedQos with values from the default XML profile.
   * @param extended_qos - DomainParticipantExtendedQos object where values are returned.
   * @returns RETCODE_OK.
   */
  get_participant_extended_qos_from_default_profile(
    extended_qos: DomainParticipantExtendedQos
  ): ReturnCode

  // --- Participant Deletion and Profile Loading ---

  /**
   * Removes a Participant and all associated publishers and subscribers.
   * @param part - The DomainParticipant to be deleted.
   * @returns RETCODE_PRECONDITION_NOT_MET if the participant has active entities, RETCODE_OK if deleted, or RETCODE_ERROR otherwise.
   */
  delete_participant(part: DomainParticipant): ReturnCode

  /**
   * Loads profiles from the default XML file.
   * @returns RETCODE_OK.
   */
  load_profiles(): ReturnCode

  /**
   * Loads profiles from an XML file.
   * @param xml_profile_file - XML profile file path.
   * @returns RETCODE_OK if loaded correctly, or RETCODE_ERROR otherwise.
   */
  load_XML_profiles_file(xml_profile_file: string): ReturnCode

  /**
   * Loads profiles from an XML string.
   * @param data - XML data as a string.
   * @param length - Length of the data.
   * @returns RETCODE_OK if loaded correctly, or RETCODE_ERROR otherwise.
   */
  load_XML_profiles_string(data: string, length: number): ReturnCode

  /**
   * Checks the validity of the provided static discovery XML file.
   * @param xml_file - XML file path.
   * @returns RETCODE_OK if validation is successful, or RETCODE_ERROR otherwise.
   */
  check_xml_static_discovery(xml_file: string): ReturnCode

  // --- Factory QoS and Settings ---

  /**
   * Returns the value of the DomainParticipantFactory QoS policies.
   * @param qos - DomainParticipantFactoryQos reference where the QoS is returned.
   * @returns RETCODE_OK.
   */
  get_qos(qos: DomainParticipantFactoryQos): ReturnCode

  /**
   * Sets the value of the DomainParticipantFactory QoS policies.
   * **Note:** Although QoS is supported, the DomainParticipantFactory is not an Entity.
   * @param qos - DomainParticipantFactoryQos to be set.
   * @returns RETCODE_IMMUTABLE_POLICY if any QoS cannot be changed, RETCODE_INCONSISTENT_POLICY if not self consistent, or RETCODE_OK if changed correctly.
   */
  set_qos(qos: DomainParticipantFactoryQos): ReturnCode

  /**
   * Returns the value of the DomainParticipant library settings.
   * @param library_settings - LibrarySettings reference where the settings are returned.
   * @returns RETCODE_OK.
   */
  get_library_settings(library_settings: LibrarySettings): ReturnCode

  /**
   * Sets the library settings.
   * **Note:** Library settings must be set before enabling any DomainParticipant.
   * @param library_settings - LibrarySettings to be set.
   * @returns RETCODE_PRECONDITION_NOT_MET if any DomainParticipant is already enabled, or RETCODE_OK otherwise.
   */
  set_library_settings(library_settings: LibrarySettings): ReturnCode

  // --- Dynamic Type and Type Object Registry ---

  /**
   * Gets the DynamicType defined in an XML file (the XML must have been loaded beforehand).
   * @param type_name - Dynamic type name.
   * @param type - Reference where the DynamicTypeBuilder is returned.
   * @returns RETCODE_BAD_PARAMETER if type_name is empty, RETCODE_NO_DATA if unknown, or RETCODE_OK otherwise.
   */
  get_dynamic_type_builder_from_xml_by_name(
    type_name: string,
    type: DynamicTypeBuilderRef
  ): ReturnCode

  /**
   * Returns the TypeObjectRegistry member to access the public API.
   * @returns The TypeObjectRegistry.
   */
  type_object_registry(): ITypeObjectRegistry

  // --- Public Static Functions ---

  /**
   * Returns the DomainParticipantFactory singleton instance.
   * @returns A raw pointer to the DomainParticipantFactory singleton instance.
   */
  static get_instance(): DomainParticipantFactory

  /**
   * Returns the DomainParticipantFactory singleton instance as a shared pointer.
   * @returns A shared pointer to the DomainParticipantFactory singleton instance.
   */
  static get_shared_instance(): DomainParticipantFactory
}
