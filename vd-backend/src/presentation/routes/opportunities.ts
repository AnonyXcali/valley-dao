import { OpportunitiesController } from './controllers/OpportunitiesController';


export const opportunitiesRoutes = (req: any, res: any): void => {
  const url = new URL(req.url || '', `http://${req.headers.host}`);
  const search = url.searchParams.get('search') || "";

  if (url.pathname === '/opportunities' && req.method === 'GET') {
    new OpportunitiesController().handle(req, res, { search });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};