import { IOpportunitiesRepository } from '../../domain/interfaces/IOpportunitiesRepository';
import { Opportunity } from '../../domain/entities/Opportunity';
import { FilterAggregator } from '../filters/FilterAggregator';
import { TitleFilter } from '../filters/TitleFilter';

export class GetOpportunitiesUseCase {
  private repository: IOpportunitiesRepository;

  constructor(repository: IOpportunitiesRepository) {
    this.repository = repository;
  }

  execute(filters: { search?: string }): Opportunity[] {
    const opportunities = this.repository.getAll();
    const filterAggregator = new FilterAggregator();

    if (filters.search) {
      filterAggregator.addFilter(new TitleFilter(filters.search));
    }

    return filterAggregator.applyFilters(opportunities);
  }
}