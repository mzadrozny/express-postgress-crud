import { Users } from './users.entity';
import { User } from 'src/models/user';

export const getUsersData = () => {
  return Users.find({
    order: {
      name: 'ASC',
      id: 'DESC',
    },
  });
};

export const getUserByIdData = (id: string) => {
  return Users.findOne(id);
};

export const postUserData = async (userData: User) => {
  const newUser = new Users();
  newUser.name = userData.name;
  newUser.email = userData.email;
  const user = await Users.create(newUser);
  return Users.save(user);
};

export const putUserByIdData = async (id: string, userData: User) => {
  const user = await Users.findOne(id);
  const updatedUser = user;
  updatedUser.name = userData.name;
  updatedUser.email = userData.email;
  Users.merge(user, updatedUser);
  return Users.save(user);
};

export const deleteUserById = (id: string) => {
  return Users.delete(id);
};
