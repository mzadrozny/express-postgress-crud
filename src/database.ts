import { Pool } from 'pg';
import { env } from './config';

export const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
});
