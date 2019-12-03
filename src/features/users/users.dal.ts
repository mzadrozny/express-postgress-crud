import { pool } from "../../database";
import { Users } from "./users.entity";

export const getUsersData = () => {
  return Users.find();
}