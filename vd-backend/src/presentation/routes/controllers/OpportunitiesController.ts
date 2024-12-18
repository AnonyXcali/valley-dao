import { GetOpportunitiesUseCase } from '../../../application/usecases/GetOpportunitiesUseCase';
import { OpportunitiesDataSource } from '../../../infrastructure/db/database';

export class OpportunitiesController {
  private useCase: GetOpportunitiesUseCase;

  constructor() {
    const repository = new OpportunitiesDataSource();
    this.useCase = new GetOpportunitiesUseCase(repository);
  }

  handle(req: any, res: any, query: { search?: string }): void {
    const opportunities = this.useCase.execute(query);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(opportunities));
  }
}