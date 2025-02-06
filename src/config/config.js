import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const db = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER ,process.env.POSTGRES_PASSWORD, {
    host:process.env.HOST,
    dialect:"postgres"
})