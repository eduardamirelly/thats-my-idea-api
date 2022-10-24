import { User } from "@prisma/client";

import { usersRepository } from "../../database/repositories";

export default class FindUserByIdService {
  static run = async (id: string): Promise<User> => {
    const user = usersRepository.findUniqueOrThrow({
      where: { id },
    });

    return user;
  };
}
