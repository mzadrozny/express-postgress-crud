import { getUsersData, getUserByIdData, postUserData, putUserByIdData, deleteUserById } from "./users.dal";
import { Users } from "./users.entity";
import { User } from "src/models/user";

export const getUsersResult = () => {
  return getUsersData();
}

export const getUserByIdResult = (id: string) => {
  return getUserByIdData(id);
}

export const postUserService = (userData: User) => {
  return postUserData(userData);
}

export const putUserService = (id: string, userData: User) => {
  return putUserByIdData(id, userData);
}

export const deleteUserService = (id: string) => {
  return deleteUserById(id);
}