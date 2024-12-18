import http, { IncomingMessage, ServerResponse } from 'http';

export class HttpServer {
  constructor(private port: number) {}

  start(routeHandler: (req: IncomingMessage, res: ServerResponse) => void): void {
    const server = http.createServer((req, res) => {
      // Add CORS headers
      this.addCorsHeaders(res);

      // Handle preflight requests
      if (req.method === 'OPTIONS') {
        res.writeHead(204); // No Content
        res.end();
        return;
      }

      // Delegate to the route handler
      routeHandler(req, res);
    });

    server.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }

  private addCorsHeaders(res: ServerResponse): void {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (change to specific origin for production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  }
}