import { pool } from "../../database";

export const getUsersData = pool.query('SELECT * FROM users ORDER BY id ASC');