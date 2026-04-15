import express from 'express';
import { authAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', authAdmin);
// router.post('/register', registerAdmin); // Can uncomment when needed to create the first admin

export default router;
