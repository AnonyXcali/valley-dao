import { Opportunity } from '../../domain/entities/Opportunity';
import { IFilter } from './IFilter';

export class FilterAggregator {
  private filters: IFilter[] = [];

  addFilter(filter: IFilter): void {
    this.filters.push(filter);
  }

  applyFilters(opportunities: Opportunity[]): Opportunity[] {
    return this.filters.reduce(
      (filteredData, filter) => filter.apply(filteredData),
      opportunities
    );
  }
}