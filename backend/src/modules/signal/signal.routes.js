import {Router} from 'express'
import { createSignal, getAdminStats } from './signal.controller.js';
import { authenticateToken, authorizeRoles } from '../../middleware/auth.middleware.js';

const signalRoutes = Router();
signalRoutes.post('/',authenticateToken,authorizeRoles('admin'),createSignal)


export default signalRoutes;