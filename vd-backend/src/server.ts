import { HttpServer } from './infrastructure/http/HttpServer';
import { opportunitiesRoutes } from './presentation/routes/opportunities';
import { AppConfig } from './config/AppConfig';

const server = new HttpServer(Number(AppConfig.PORT));
server.start(opportunitiesRoutes);