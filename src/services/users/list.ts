import { User } from "@prisma/client";

import { usersRepository } from "../../database/repositories";

export default class ListUsersService {
  static run = async (): Promise<User[]> => {
    const user = usersRepository.findMany();

    return user;
  };
}
