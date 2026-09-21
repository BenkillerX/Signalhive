import { Router } from "express";
import { emailValidation, getCurrentUser, Login, register,} from "./auth.controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";

const authRoutes = Router();
authRoutes.post('/register', register)
authRoutes.post('/login', Login)
authRoutes.post('/me',authenticateToken ,getCurrentUser)
authRoutes.post("/verify-email", emailValidation);
export default authRoutes