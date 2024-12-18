import { Opportunity } from '../../domain/entities/Opportunity'
import { IFilter } from './IFilter'

/**
 * @class TitleFilter
 * This class is a concrete class that filters the provided opportunities 
 * data, based on search terms it has been provided.
 * 
 * It checks for the presence of a particular search term, present in either:-
 * 1) Title
 * 2) Description
 * 
 * within each object of the Array of type Opportunity
 */
export class TitleFilter implements IFilter {
  constructor(private search: string) {}

  apply(opportunities: Opportunity[]): Opportunity[] {
    let stringBreak = this.search.split(" ")
    let resultant = []

    for(let opportunity of opportunities) {
      let isFound = false

      for(let term of stringBreak) {
        const currentSearchTerm = term.toLowerCase()
        const titleBasedBoolean: boolean = opportunity.title.toLowerCase().includes(currentSearchTerm)
        const descriptionBasedBoolean: boolean = opportunity.description.toLowerCase().includes(currentSearchTerm)
        
        isFound = titleBasedBoolean || descriptionBasedBoolean
      }

      if(isFound) {
        resultant.push(opportunity)
      }
    }

    return resultant
  }
}