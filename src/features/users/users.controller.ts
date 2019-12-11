import { Request, Response } from 'express';
import {
  getUsersResult,
  getUserByIdResult,
  postUserService,
  putUserService,
  deleteUserService,
} from './users.service';
import { Users } from './users.entity';
import { User } from 'src/models/user';

type ResponseData = {
  statusCode: number;
  responseBody?: Users[] | Users;
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<ResponseData | undefined> => {
  try {
    const users: Users[] = await getUsersResult();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<ResponseData | undefined> => {
  try {
    const id = req.params.id;
    const user: Users = await getUserByIdResult(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<ResponseData | undefined> => {
  try {
    const result = await postUserService(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<ResponseData | undefined> => {
  try {
    const result = await putUserService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<ResponseData | undefined> => {
  try {
    const result = await deleteUserService(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server error');
  }
};
