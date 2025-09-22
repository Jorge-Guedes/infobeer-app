import { ICategory } from "../../types/interfaces";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  category: ICategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.name.split(" ").join("-")}/${category.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer w-80 h-64 flex flex-col overflow-hidden">
        <div className="h-3/4 w-full overflow-hidden">
          <img
            src={category.img}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-1/4 flex items-center justify-center">
          <h1 className="junius-irish text-gray-700 text-lg text-center px-2">
            {category.name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
