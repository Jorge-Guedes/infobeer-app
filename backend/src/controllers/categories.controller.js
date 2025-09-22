import { getAllCategories } from "../models/categories.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    console.error("ERROR en getCategories:", err); // <-- imprimir error real
    res.status(500).json({ message: "Internal server error" });
  }
};
