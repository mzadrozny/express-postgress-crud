import { Request, Response } from "express";

import { getUsers } from "./UserController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [
      (req: Request, res: Response) => {
        getUsers(req, res);
      }
    ]
  },
];
