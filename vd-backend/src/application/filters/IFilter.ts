import { Opportunity } from '../../domain/entities/Opportunity'

/**
 * Interface for the IFilter
 * 
 * apply function requires Array of type Opportunity,
 * which returns Array of type Opportunity.
 */
export interface IFilter {
  apply(opportunities: Opportunity[]): Opportunity[]
}