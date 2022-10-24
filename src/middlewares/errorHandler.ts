import { Prisma } from "@prisma/client";
import { ErrorRequestHandler } from "express";

import { AppError } from "../utils";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: "error",
      message: error.message,
    });
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return response.status(400).json({
      status: "error",
      message: error.message,
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return response.status(400).json({
        status: "error",
        message: `Unique constraint violation at ${error.meta?.target}`,
      });
    }

    if (error.code === "P2025") {
      return response.status(404).json({
        status: "error",
        message: error.meta?.cause,
      });
    }
  }

  if (error instanceof Prisma.NotFoundError) {
    return response.status(404).json({
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
