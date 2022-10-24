import { User } from "@prisma/client";

import { usersRepository } from "../../database/repositories";
import { CreateUserParams } from "../../@types/user";

export default class CreateUserService {
  static run = async (data: CreateUserParams): Promise<User> => {
    const user = usersRepository.create({ data });

    return user;
  };
}
