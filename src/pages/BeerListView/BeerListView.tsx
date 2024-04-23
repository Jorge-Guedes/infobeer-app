import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../../../public/data/categoryBeer.json";
import { IBeerData } from "../../types/interfaces";
import BeerCard from "../../components/BeerCard/BeerCard";

const BeerListView = () => {
  const { id } = useParams();
  const { category } = useParams();
  const [beerList, setBeerList] = useState<IBeerData[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;
  const totalPages = Math.ceil(beerList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const beersToShow = beerList.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCategory = categories.find(
          (category) => category.id === id
        );
        if (currentCategory) {
          const response = await fetch(currentCategory.data);
          const jsonData = await response.json();
          setBeerList(jsonData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-full flex flex-col p-3">
      <div className="flex flex-wrap justify-around gap-4 m-6">
        {beersToShow.map((beer) => (
          <Link key={beer._id} to={`/category/${category}/beer/${beer._id}`}>
            <BeerCard beer={beer} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:scale-110 duration-150"
        >
          Anterior
        </button>
        <p>{`${currentPage} / ${totalPages}`}</p>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={endIndex >= beerList.length}
          className="ml-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:scale-110 duration-150"
        >
          Siguiente
        </button>
      </div>
      </div>
    </>
  );
};

export default BeerListView;
