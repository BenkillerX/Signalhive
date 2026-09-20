import { Router } from "express";
import { Login, regiter } from "./auth.controller.js";

const authRoutes = Router();
authRoutes.post('/register', regiter)
authRoutes.post('/login', Login)

export default authRoutes