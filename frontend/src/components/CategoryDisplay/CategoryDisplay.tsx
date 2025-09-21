import CategoryCard from "../CategoryCard/CategoryCard";
import { ICategory } from "../../types/interfaces";

type CategoryDisplayProps = {
  categories: ICategory[];
};

export const CategoryDisplay = ({ categories }: CategoryDisplayProps) => {
  return (
    <div className="pt-10 px-4">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
