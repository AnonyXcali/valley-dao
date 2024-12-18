import { Opportunity } from '../../domain/entities/Opportunity'
import { IFilter } from './IFilter'

/**
 * @class FilterAggregator
 * This class is a generic class that filters the provided opportunities 
 * data, based on multiple filters it has been provided.
 */
export class FilterAggregator {
  /**filters store the filter implementations of type IFilter interface*/
  private filters: IFilter[] = []

  /**
   * @function addFilter
   * @param filter
   * 
   * Adds the interface IFilter based filters to the 
   * filter property of FilterAggregator Class.
   */
  addFilter(filter: IFilter): void {
    this.filters.push(filter)
  }

  /**
   * @function applyFilters
   * @param opportunities
   * 
   * Applies all the filters present in filters property on the
   * provided Array of Opportunity.
   */
  applyFilters(opportunities: Opportunity[]): Opportunity[] {
    return this.filters.reduce(
      (filteredData, filter) => filter.apply(filteredData),
      opportunities
    )
  }
}