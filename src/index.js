import express from "express";
import { db } from "./config/config.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();

let  connMessage = ""
try {
    db.authenticate();
    db.sync({alter: true});
    connMessage = "connection done"
    console.log("The connection to potgres has been stablished...")
} catch (error) {
    connMessage = error
    console.log(error)

    
}


app.get('/', (req, res) => {
    res.json({ message: `${process.env._SERVICE_NAME}`, text: 'We can do it now and today. Yay!! 🌟', connection: connMessage });

});

app.listen(3000, () => {
    console.log(`App is listening on port 3000 ${dotenv.env._HOST}, this is the host`);
});