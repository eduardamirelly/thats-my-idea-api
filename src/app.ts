import "express-async-errors";

import express, { Application } from "express";

import routes from "./routes";
import { clientErrorHandler, errorHandler } from "./middlewares";

export default class App {
  public readonly express: Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
    this.express.use(clientErrorHandler);
    this.express.use(errorHandler);
  }
}
