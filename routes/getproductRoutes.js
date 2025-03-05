import express from "express";

import { getproductController } from "../controllers/getproductController.js";

const router = express.Router();

router.get("/items",getproductController);

export default router;
