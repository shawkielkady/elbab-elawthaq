import { Router } from "express";
const router = Router();

import { getExternalData } from "../controllers/apiController.js";

router.get("/extract", getExternalData);

export default router;