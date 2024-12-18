import { HttpServer } from './infrastructure/http/HttpServer'
import { opportunitiesRoutes } from './presentation/routes/opportunities'
import { AppConfig } from './config/AppConfig'

/**
 * This file is the entry for the entire NodeJS application
 * HTTPServer module's single instance is provided, alongside
 * the routes configured in opportunitiesRoutes
 * 
 * AppConfig is required for the PORT number configuration (i.e 3000)
 */
const server = new HttpServer(Number(AppConfig.PORT))
server.start(opportunitiesRoutes)