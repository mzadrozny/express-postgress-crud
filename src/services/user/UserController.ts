import { Request, Response } from "express";
import { pool } from "../../database";
import { QueryResult } from "pg";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const response: QueryResult = await
      pool.query('SELECT * FROM users ORDER BY id ASC');
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
}
