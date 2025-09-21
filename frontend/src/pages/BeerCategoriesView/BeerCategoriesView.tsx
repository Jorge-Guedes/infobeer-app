/* import categories from "../../../public/data/categoryBeer.json" */
import axios from "axios";
import { CategroyDisplay } from "../../components/CategoryDisplay/CategroyDisplay";
import { useState, useEffect } from "react";

const BeerCategoriesView = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/categories/all-categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div className="h-full">
      <CategroyDisplay categories={categories} />
    </div>
  );
};

export default BeerCategoriesView;
