import { Request, Response } from "express";

import { getUsers, getUserById, updateUser, deleteUser } from "./users.controller";

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
  {
    path: "/users/:id",
    method: "get",
    handler: [
      (req: Request, res: Response) => {
        getUserById(req, res);
      }
    ]
  },
  {
    path: "/users",
    method: "post",
    handler: [
      (req: Request, res: Response) => {
        getUserById(req, res);
      }
    ]
  },
  {
    path: "/users/:id",
    method: "put",
    handler: [
      (req: Request, res: Response) => {
        updateUser(req, res);
      }
    ]
  },
  {
    path: "/users/:id",
    method: "delete",
    handler: [
      (req: Request, res: Response) => {
        deleteUser(req, res);
      }
    ]
  },
];
