import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRoutes from "./routes/categories.routes.js";
import beersRoutes from "./routes/beers.routes.js";

dotenv.config();
const app = express();

app.use(cors());

app.use("/api/categories", categoriesRoutes);
app.use("/api/beers", beersRoutes);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
