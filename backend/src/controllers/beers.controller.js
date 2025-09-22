import {
  getAllBeers,
  getAllBeersByCategory,
  getRandomBeer,
  getBeerById,
} from "../models/beers.model.js";

export const getBeers = async (req, res) => {
  try {
    const beers = await getAllBeers();
    res.json(beers);
  } catch (err) {
    console.log("ERROR en getBeers:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBeer = async (req, res) => {
  try {
    const { id } = req.params;
    const beer = await getBeerById(Number(id));
    if (!beer) {
      return res.status(404).json({ message: "Beer not found" });
    }
    res.json(beer);
  } catch (err) {
    console.log("ERROR en getBeer:", err);
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

export const getRandom = async (req, res) => {
  try {
    const randomBeer = await getRandomBeer();
    res.json(randomBeer);
  } catch (err) {
    console.log("ERROR en getRandom:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
