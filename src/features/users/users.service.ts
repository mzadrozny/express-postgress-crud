import { getUsersData } from "./users.dal";

export const getUsersResult = () => {
  return getUsersData();
}