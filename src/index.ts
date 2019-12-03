import express from 'express';

import routes from './features';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import { env } from './config';

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const app = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(env.PORT, () => {
  console.log('Server is working on port', env.PORT);
});