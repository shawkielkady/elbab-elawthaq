import express from 'express';
import {
  createDemand,
  getDemands,
  updateDemandStatus,
} from '../controllers/demandController.js';
import { protectAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(createDemand)
  .get(protectAdmin, getDemands);

router.route('/:id/status')
  .put(protectAdmin, updateDemandStatus);

export default router;
