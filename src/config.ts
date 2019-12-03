import envalid from 'envalid';

const { str, num } = envalid;

export const env = envalid.cleanEnv(process.env, {
  DB_HOST: str(),
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_NAME: str(),
  DB_PORT: num(),
  PORT: num(),
});