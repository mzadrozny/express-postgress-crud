import { Users } from "./users.entity";

export const getUsersData = () => {
  return Users.find({
    order: {
      name: "ASC",
      id: "DESC"
    }
  });
}

export const getUserById = (id: string) => {
  return Users.findOne(id);
}

export const postUserData = async (userData: Users) => {
  const user = await Users.create(userData);
  return Users.save(user);
}

export const putUserByIdData = async (userData: Users) => {
  const user = await Users.findOne(userData.id);
  Users.merge(user, userData);
  return Users.save(user);
}

export const deleteUserById = (id: string) => {
  return Users.delete(id);
}