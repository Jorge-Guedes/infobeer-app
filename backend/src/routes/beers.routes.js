import { Router } from "express";
import {
  getBeers,
  getBeersByCategory,
  getRandom,
} from "../controllers/beers.controller.js";

const router = Router();

router.get("/all-beers", getBeers);
router.get("/beers-by-category/:idCategory", getBeersByCategory);
router.get("/random-beer", getRandom);

export default router;
