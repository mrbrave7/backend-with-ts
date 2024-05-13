import mongoose from "mongoose"
import { config } from "../config/config"
import { error } from "console"


async function dbConfig () {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB Connected ")
        })
        mongoose.connection.on("error",() => {
            console.log("MongoDB Connection Error",error)
        })
        await mongoose.connect(config.dbUrl as string)
        console.log(`MongoDB Successfully Connected At Host : ${mongoose.connection.host}`)
    } catch (error) {
        console.log("Failed To Connect Database : ", error)
        process.exit(1)
    }
}

export default dbConfig