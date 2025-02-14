import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'MS_1',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'root',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432'),
  },
  test: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'MS_1',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'root',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432'),
  },
  production: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'MS_1',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'root',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432'),
  },
};

export default config;
