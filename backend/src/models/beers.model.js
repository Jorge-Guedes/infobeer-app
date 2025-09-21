import { pool } from "../config/bd.js";

export const getAllBeersByCategory = async (categoryId) => {
  const { rows } = await pool.query(
    "SELECT * FROM beers WHERE category_id = $1;",
    [categoryId]
  );
  return rows;
};
