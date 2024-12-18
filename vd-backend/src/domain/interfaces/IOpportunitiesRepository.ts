import { Opportunity } from '../entities/Opportunity';

export interface IOpportunitiesRepository {
  getAll(): Opportunity[];
}