import { RequestHandler } from "express";
import { AppError } from "../utils";

const clientErrorHandler: RequestHandler = (request, response, next) => {
  throw new AppError({
    message: `Could not [${request.method}] ${request.path}`,
    status: 404,
  });
};

export default clientErrorHandler;
