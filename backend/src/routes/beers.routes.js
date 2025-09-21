import { Router } from "express";
import {
  getBeers,
  getBeersByCategory,
} from "../controllers/beers.controller.js";

const router = Router();

router.get("/all-beers", getBeers);
router.get("/beers-by-category/:idCategory", getBeersByCategory);

export default router;
