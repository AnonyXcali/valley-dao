import http, { IncomingMessage, ServerResponse } from 'http'

/**
 * @class HTTPServer
 * this class implements NodeJS server serving method
 * Meant to be a singelton class for the entire application.
 */
export class HttpServer {
  constructor(private port: number) {}

  /**
   * @function start
   * @param routeHandler
   * 
   * This creates a server via a singleton instance of the HTTPClass.
   */
  start(routeHandler: (req: IncomingMessage, res: ServerResponse) => void): void {
    const server = http.createServer((req, res) => {
      this.addCorsHeaders(res)

      if (req.method === 'OPTIONS') {
        res.writeHead(204) // No Content
        res.end()
        return
      }
      routeHandler(req, res)
    })

    server.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }

  /**
   * @function addCorsHeaders
   * @param res 
   * Handles CORS related configuration.
   */
  private addCorsHeaders(res: ServerResponse): void {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  }
}