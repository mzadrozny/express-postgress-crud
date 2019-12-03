import { pool } from "../../database";

export const getUsers = () => {
  const response = pool.query('SELECT * FROM users');
  console.log(response);
  return response;
};