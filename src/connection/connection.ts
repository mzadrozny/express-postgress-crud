import { createConnection } from "typeorm";

import { Users } from "../features/users/users.entity";
import { env } from '../config';

export const connection = createConnection({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [
    Users
  ],
  synchronize: true,
  logging: false
});