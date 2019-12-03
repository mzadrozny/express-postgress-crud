import { pool } from "../../database";

export const getUsers = () => pool.query('SELECT * FROM users');
