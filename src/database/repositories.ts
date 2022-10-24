import { Prisma, PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils";

const prismaClient = new PrismaClient();

const hashPasswordMiddleware: Prisma.Middleware = async (params, next) => {
  if (params.model === "User") {
    if (params.action === "create") {
      params.args.data.password = await hashPassword(params.args.data.password);
    }

    if (params.action === "update" && params.args.data.password) {
      params.args.data.password = await hashPassword(params.args.data.password);
    }
  }

  return next(params);
};

prismaClient.$use(hashPasswordMiddleware);

export const usersRepository = prismaClient.user;
