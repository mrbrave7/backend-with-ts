import { config as conf } from "dotenv"

conf()

const _confit = {
    port :process.env.PORT,
    dbUrl :process.env.MONGO_DB_CONNECTION_STRING,
    dbName :process.env.DATABASE_NAME,
    env:process.env.NODE_ENV
}

export const config = Object.freeze(_confit)