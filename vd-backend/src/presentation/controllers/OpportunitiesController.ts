import { GetOpportunitiesUseCase } from '../../application/usecases/GetOpportunitiesUseCase'
import { OpportunitiesDataSource } from '../../infrastructure/db/database'

/**
 * @class OpportunitiesController
 * this class handles
 * 1) Instantiating the repository containing all the opportunity data.
 * 2) Instantiates the use case for filtering the provided data.
 */
export class OpportunitiesController {
  private useCase: GetOpportunitiesUseCase

  constructor() {
    const repository = new OpportunitiesDataSource()
    this.useCase = new GetOpportunitiesUseCase(repository)
  }

  /**
   * @function handle
   * @param req 
   * @param res 
   * @param query 
   * 
   * handles the filtering via receiving the request params of search terms.
   * provides filtered data of type application/json to the user.
   */
  handle(req: any, res: any, query: { search?: string }): void {
    const opportunities = this.useCase.execute(query)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(opportunities))
  }
}