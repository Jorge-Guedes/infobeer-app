import CategoryCard from "../CategoryCard/CategoryCard";
import { ICategory } from "../../types/interfaces";

type CategoryDisplayProps = {
  categories: ICategory[];
};

export const CategoryDisplay = ({ categories }: CategoryDisplayProps) => {
  return (
    <div className="h-full flex flex-wrap gap-10 justify-center items-center pt-10">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
