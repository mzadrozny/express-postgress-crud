import { Request, Response } from "express";

import { getUsers } from "./user.contoller";

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
