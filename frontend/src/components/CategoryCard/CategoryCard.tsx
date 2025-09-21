import { ICategory } from "../../types/interfaces";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  category: ICategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.name.split(" ").join("-")}/${category.id}`}>
      <div className="text-center rounded-lg transition-transform hover:scale-110">
        <img
          src={category.img}
          className="w-96 rounded-lg border-[2px] border-amber-300"
        />
        <h1 className="junius-irish text-gray-600 text-[20px]">
          {category.name}
        </h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
