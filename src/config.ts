import { str, num, cleanEnv } from 'envalid';


export const env = cleanEnv(process.env, {
  DB_HOST: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  DB_PORT: num(),
  PORT: num(),
});