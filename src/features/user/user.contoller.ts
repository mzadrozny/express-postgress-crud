import { Request, Response } from "express";
import { QueryResult } from "pg";
import { getUsersResult } from "./user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const response: QueryResult = await
      getUsersResult;
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
}
