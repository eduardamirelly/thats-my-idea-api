import { RequestHandler } from "express";

import {
  CreateUserService,
  DeleteUserService,
  FindUserByIdService,
  ListUsersService,
  UpdateUserService,
} from "../services/users";
import { UserViews } from "../views";

export default class UsersController {
  static create: RequestHandler = async (request, response) => {
    const data = request.body;

    const user = await CreateUserService.run(data);

    return response.json(UserViews.renderOne(user));
  };

  static list: RequestHandler = async (request, response) => {
    const user = await ListUsersService.run();

    return response.status(201).json(UserViews.renderMany(user));
  };

  static findById: RequestHandler = async (request, response) => {
    const { id } = request.params;

    const user = await FindUserByIdService.run(id);

    return response.json(UserViews.renderOne(user));
  };

  static update: RequestHandler = async (request, response) => {
    const { id } = request.params;
    const data = request.body;

    const user = await UpdateUserService.run(id, data);

    return response.json(UserViews.renderOne(user));
  };

  static delete: RequestHandler = async (request, response) => {
    const { id } = request.params;

    const user = await DeleteUserService.run(id);

    return response.json(UserViews.renderOne(user));
  };
}
