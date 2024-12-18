import { IOpportunitiesRepository } from '../../domain/interfaces/IOpportunitiesRepository'
import { Opportunity } from '../../domain/entities/Opportunity'
import { FilterAggregator } from '../filters/FilterAggregator'
import { TitleFilter } from '../filters/TitleFilter'

/**
 * @class GetOpportunitiesUseCase
 * This class is a concrete class that provides Array of type Opportunity.
 * It also filters if certain filter based on interface IFilter are provided.
 * Filters are processed by FilterAggregator class
 */
export class GetOpportunitiesUseCase {
  private repository: IOpportunitiesRepository

  constructor(repository: IOpportunitiesRepository) {
    this.repository = repository
  }

  execute(filters: { search?: string }): Opportunity[] {
    const opportunities = this.repository.getAll()
    const filterAggregator = new FilterAggregator()

    if (filters.search) {
      filterAggregator.addFilter(new TitleFilter(filters.search))
    }

    return filterAggregator.applyFilters(opportunities)
  }
}