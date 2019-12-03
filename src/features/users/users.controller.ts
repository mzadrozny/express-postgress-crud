import { Request, Response } from "express";
import { getUsersResult } from "./users.service";
import { Users } from "./users.entity";

type ResponseData = {
  statusCode: number
  responseBody?: Users[]
}

export const getUsers = async (req: Request, res: Response): Promise<ResponseData | undefined> => {
  try {
    const users: Users[] = await getUsersResult();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
}

