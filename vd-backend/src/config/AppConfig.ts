import dotenv from 'dotenv'
dotenv.config()

/**
 * AppConfig:-
 * Application level configuration can be done here.
 */
export const AppConfig = {
  PORT: process.env.PORT || 3000,
}