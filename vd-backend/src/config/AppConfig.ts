import dotenv from 'dotenv';
dotenv.config();

export const AppConfig = {
  PORT: process.env.PORT || 3000,
};