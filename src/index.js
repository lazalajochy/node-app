import express from "express";
import { db } from "./config/config.js";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";
import bodyParser from "body-parser";

dotenv.config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
async function connectDatabase() {
    try {
        await db.authenticate(); // Aseguramos que la conexión se autentique correctamente
        await db.sync({ alter: true }); // Sincronización con la base de datos
        console.log("The connection to PostgreSQL has been established...");
        
        // Hacemos una pequeña consulta para verificar la conexión
        const result = await db.query('SELECT NOW()');
        console.log("Test query result:", result[0]); // Deberías ver la fecha y hora de la base de datos
        
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

connectDatabase();

app.use(userRoute);

console.log(process.env.HOST, " hello hello");
console.log(process.env.POSTGRES_DB, " hello hello again");

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
