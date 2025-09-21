import { Router } from "express";
import { getCategories } from "../controllers/categories.controler.js";

const router = Router();

router.get("/all-categories", getCategories);

export default router;
