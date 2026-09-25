import {Router} from 'express'
import { getAdminStats } from './admin.controller.js';
import { authenticateToken, authorizeRoles } from '../../middleware/auth.middleware.js';
const adminRoutes = Router();
adminRoutes.get('/stats',authenticateToken , authorizeRoles('admin'),getAdminStats)
export default adminRoutes;