import {Router} from 'express'
import { createSignal, getSignals } from './signal.controller.js';
import { authenticateToken, authorizeRoles } from '../../middleware/auth.middleware.js';

const signalRoutes = Router();
signalRoutes.post('/',authenticateToken,authorizeRoles('admin'),createSignal)
signalRoutes.get('/',authenticateToken,authorizeRoles('admin'),getSignals)


export default signalRoutes;