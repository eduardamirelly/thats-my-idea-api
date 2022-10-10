interface AppErrorParams {
  message: string;
  status: number;
}

export default class AppError extends Error {
  public message: string;
  public status: number;

  constructor({ message, status }: AppErrorParams) {
    super();

    this.message = message;
    this.status = status;
  }
}
