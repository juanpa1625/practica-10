import { config } from "dotenv"

config()

export const BD_HOST = process.env['BD_HOST']
export const BD_NAME = process.env['BD_NAME']
export const BD_USER = process.env['BD_USER']
export const BD_PASS = process.env['BD_PASS']
export const BD_PORT = process.env['BD_PORT']

