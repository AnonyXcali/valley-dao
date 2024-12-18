import { Opportunity } from '../../domain/entities/Opportunity';

export interface IFilter {
  apply(opportunities: Opportunity[]): Opportunity[];
}