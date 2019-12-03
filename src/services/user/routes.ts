import { Request, Response } from "express";
import { QueryResult } from 'pg';

import { getUsers } from "./UserController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result: QueryResult = await getUsers();

        res.json(result.rows);
      }
    ]
  },
];
