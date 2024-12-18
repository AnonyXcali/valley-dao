import { IOpportunitiesRepository } from '../../domain/interfaces/IOpportunitiesRepository'
import { Opportunity } from '../../domain/entities/Opportunity'
import opportunitiesData from '../../data/opportunities.json'


/**
 * @class OpportunitiesDataSource
 * this class implements IOpportunitiesRepository
 * 
 * It reads the opportunitiesData.json and provides objects of class Opportunity
 * for the application to consume or optionally filter.
 */
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
    )
  }
}