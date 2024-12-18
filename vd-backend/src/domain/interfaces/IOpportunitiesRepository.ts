import { Opportunity } from '../entities/Opportunity'

/**
 * @interface IOpportunitiesRepository
 * this interface provides the shape of the Repository implemented classes.
 * 
 * The classes must provide implementation details for the getAll function.
 * 
 * This function is meant to access all the data in the database.
 */
export interface IOpportunitiesRepository {
  getAll(): Opportunity[]
}