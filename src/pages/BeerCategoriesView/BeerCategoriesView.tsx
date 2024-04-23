import categories from "../../../public/data/categoryBeer.json"
import { CategroyDisplay } from "../../components/CategoryDisplay/CategroyDisplay";

const BeerCategoriesView = () => {
  return (
    <div className="h-full">
      <CategroyDisplay categories={categories} />
    </div>
  )
}

export default BeerCategoriesView