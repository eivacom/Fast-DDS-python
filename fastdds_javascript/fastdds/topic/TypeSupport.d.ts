/**
 * Provides type support for DDS topics.
 * This class is used to register and unregister a specific data type with a DomainParticipant.
 */
export class TypeSupport {
  /**
   * Constructs a new TypeSupport instance.
   */
  constructor()

  /**
   * Copy constructor.
   * Constructs a new TypeSupport instance as a copy of the provided instance.
   * @param type - Another instance of TypeSupport.
   */
  constructor(type: TypeSupport)

  /**
   * Registers the type with a given DomainParticipant.
   * @param participant - The DomainParticipant in which to register the type.
   * @param typeName - The name of the type to register.
   * @returns A ReturnCode indicating success or an error code.
   */
  register_type(participant: DomainParticipant, typeName?: string): ReturnCode

  /**
   * Unregisters the type from a given DomainParticipant.
   * @param participant - The DomainParticipant from which to unregister the type.
   * @param typeName - The name of the type to unregister.
   * @returns A ReturnCode indicating success or an error code.
   */
  unregister_type(participant: DomainParticipant, typeName?: string): ReturnCode

  /**
   * Returns the name of the type supported.
   * @returns The type name as a string.
   */
  get_type_name(): string
}
