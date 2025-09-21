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

export const getRandomBeer = async () => {
  const { rows } = await pool.query("SELECT COUNT(*) FROM beers;");
  const totalBeers = Number(rows[0].count);
  const offset = Math.floor(Math.random() * totalBeers);
  const { rows: beerRows } = await pool.query(
    "SELECT * FROM beers OFFSET $1 LIMIT 1;",
    [offset]
  );
  return beerRows[0];
};
