import { User } from "@prisma/client";

import { usersRepository } from "../../database/repositories";

export default class DeleteUserService {
  static run = async (id: string): Promise<User> => {
    const user = usersRepository.delete({
      where: { id },
    });

    return user;
  };
}
