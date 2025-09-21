import { pool } from "../config/bd.js";

export const getAllBeers = async () => {
  const { rows } = await pool.query("SELECT * FROM beers;");
  return rows;
};

export const getAllBeersByCategory = async (categoryId) => {
  const { rows } = await pool.query(
    "SELECT * FROM beers WHERE category_id = $1;",
    [categoryId]
  );
  return rows;
};
