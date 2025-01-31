import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const db = new Sequelize(process.env._POSTGRES_DB, process.env._POSTGRES_USER ,process.env._POSTGRES_PASSWORD, {
    host:process.env._HOST,
    dialect:"postgres"
})