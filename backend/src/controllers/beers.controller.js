import { getAllBeers, getAllBeersByCategory } from "../models/beers.model.js";

export const getBeers = async (req, res) => {
  try {
    const beers = await getAllBeers();
    res.json(beers);
  } catch (err) {
    console.log("ERROR en getBeersByCategory:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBeersByCategory = async (req, res) => {
  try {
    const categoryId = Number(req.params.idCategory);
    const beers = await getAllBeersByCategory(categoryId);
    res.json(beers);
  } catch (err) {
    console.log("ERROR en getBeersByCategory:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
