import { Router } from "express";
import { getBeersByCategory } from "../controllers/beers.controller.js";

const router = Router();

router.get("/beers-by-category/:idCategory", getBeersByCategory);

export default router;
