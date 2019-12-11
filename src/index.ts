import * as express from 'express';
import * as dotenv from 'dotenv';

import routes from './features';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { env } from './config';
import { connection } from './connection/connection';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

dotenv.config();

const app = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connection.then(() => {
  app.listen(env.PORT, () => {
    console.log('Server is working on port', env.PORT);
  });
});
