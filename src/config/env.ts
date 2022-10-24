import "dotenv/config";

declare let process: {
  env: {
    API_PORT: number;
    BCRYPT_SALT_ROUNDS: number;
    DATABASE_URL: string;
  };
};

export const { API_PORT, BCRYPT_SALT_ROUNDS, DATABASE_URL } = {
  API_PORT: Number(process.env.API_PORT),
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS),
  DATABASE_URL: process.env.DATABASE_URL,
};
