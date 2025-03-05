import express from "express";

import { getsingleproductController } from "../controllers/getsingleproductController.js";

const router = express.Router();

router.get("/items/:id",getsingleproductController);

export default router;
