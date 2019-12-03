import dotenv from 'dotenv';
import envalid from 'envalid';

const { str, num } = envalid;

const result = dotenv.config()

if (result.error) {
  throw result.error;
}

export const env = envalid.cleanEnv(result, {
  DB_HOST: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  DB_PORT: num(),
  PORT: num(),
});