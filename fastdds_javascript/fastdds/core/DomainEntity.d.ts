import { Entity } from './Entity'

/**
 * DomainEntity is the abstract base class for all DDS entities associated with a DomainParticipant.
 * It extends the basic Entity interface by providing QoS management for domain-level entities.
 */
export abstract class DomainEntity extends Entity {
  /**
   * Constructs a new DomainEntity.
   * @param mask - A StatusMask indicating the relevant statuses for the entity (defaults to StatusMask.all()).
   */
  constructor(mask?: StatusMask)
}
