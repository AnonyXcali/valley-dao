import { IOpportunitiesRepository } from '../../domain/interfaces/IOpportunitiesRepository';
import { Opportunity } from '../../domain/entities/Opportunity';
import opportunitiesData from '../../data/opportunities.json';

export class OpportunitiesDataSource implements IOpportunitiesRepository {
  getAll(): Opportunity[] {
    return opportunitiesData.map(
      (item) =>
        new Opportunity(
          item.id,
          item.title,
          item.description,
          item.location,
          item.deadline,
          item.cheque_size,
          item.type,
          item.matching_score
        )
    );
  }
}