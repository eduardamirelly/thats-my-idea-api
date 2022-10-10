import "dotenv/config";

declare let process: {
  env: {
    API_PORT: number;
    DATABASE_URL: string;
  };
};

export const { API_PORT, DATABASE_URL } = process.env;
