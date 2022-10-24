import { User } from "@prisma/client";

import { OmitOnCreate, OmitOnView } from "./omit";

export type UserView = Omit<User, OmitOnView | "password">;
export type CreateUserParams = Omit<User, OmitOnCreate>;
export type UpdateUserParams = Partial<CreateUserParams>;
