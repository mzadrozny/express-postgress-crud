import { Pool } from "pg";

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'password',
  database: 'postgres',
  port: 5432
});
