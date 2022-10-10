import { ErrorRequestHandler } from "express";
import { AppError } from "../utils";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: "error",
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
};

export default errorHandler;
