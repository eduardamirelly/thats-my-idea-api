import { User } from "@prisma/client";
import { UserView } from "../@types/user";

export const renderOne = (user: User): UserView => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

export const renderMany = (users: User[]): UserView[] => users.map(renderOne);
