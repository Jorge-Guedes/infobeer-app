import { pool } from "../config/bd.js";

export const getAllBeers = async () => {
  const { rows } = await pool.query("SELECT * FROM beers;");
  return rows;
};

export const getBeerById = async (beerId) => {
  const { rows } = await pool.query("SELECT * FROM beers WHERE id = $1;", [
    beerId,
  ]);
  return rows[0];
};

export const getAllBeersByCategory = async (categoryId) => {
  const { rows } = await pool.query(
    "SELECT * FROM beers WHERE category_id = $1;",
    [categoryId]
  );
  return rows;
};

export const getRandomBeer = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM beers ORDER BY RANDOM() LIMIT 1;"
  );
  if (rows.length === 0) throw new Error("No se encontraron cervezas");
  return rows[0];
};
