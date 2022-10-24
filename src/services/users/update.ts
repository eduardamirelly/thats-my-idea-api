import { User } from "@prisma/client";

import { usersRepository } from "../../database/repositories";
import { UpdateUserParams } from "../../@types/user";

export default class UpdateUserService {
  static run = async (id: string, data: UpdateUserParams): Promise<User> => {
    const user = usersRepository.update({
      where: { id },
      data,
    });

    return user;
  };
}
