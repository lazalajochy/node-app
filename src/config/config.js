import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

console.log(process.env.DB_PORT, process.env.POSTGRES_DB, process.env.POSTGRES_PASSWORD, process.env.POSTGRES_USER, process.env.HOST)
export const db = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER ,process.env.POSTGRES_PASSWORD, {
    host:process.env.HOST,
    dialect:"postgres",
    port:process.env.DB_PORT
})