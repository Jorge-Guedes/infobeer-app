import { Router } from "express";
import {
  getBeers,
  getBeersByCategory,
  getRandom,
  getBeer,
} from "../controllers/beers.controller.js";

const router = Router();

router.get("/all-beers", getBeers);
router.get("/random-beer", getRandom);
router.get("/beers-by-category/:idCategory", getBeersByCategory);
router.get("/:id", getBeer);

export default router;
