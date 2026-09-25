import {Router} from 'express'
import { getAdminStats } from './stats.controller.js';
import { authenticateToken, authorizeRoles } from '../../middleware/auth.middleware.js';
const adminStats = Router();
adminStats.get('/',authenticateToken , authorizeRoles('admin'),getAdminStats)
export default adminStats;