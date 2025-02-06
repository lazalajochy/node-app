import { createUser, getUser } from "../controller/user.controller.js";

import express from "express"

const userRoute = express.Router();

userRoute.post("/", createUser);
userRoute.get("/",  getUser)

export default userRoute;