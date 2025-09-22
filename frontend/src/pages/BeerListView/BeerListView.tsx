import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IBeerData } from "../../types/interfaces";
import BeerCard from "../../components/BeerCard/BeerCard";
import axios from "axios";

const BeerListView = () => {
  const { id: categoryId } = useParams();
  const [beerList, setBeerList] = useState<IBeerData[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(beerList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const beersToShow = beerList.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchBeersByCategory = async () => {
      try {
        if (categoryId) {
          const res = await axios.get(
            `http://localhost:3000/api/beers/beers-by-category/${categoryId}`
          );
          setBeerList(res.data);
        }
      } catch (error) {
        console.error("Error fetching beers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeersByCategory();
  }, [categoryId]);

  if (loading) return <p className="text-center mt-10">Cargando datos...</p>;

  return (
    <div className="h-full flex flex-col pt-8 p-3">
      {/* Grid de cervezas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {beersToShow.map((beer) => (
          <Link key={beer.id} to={`/beer/${beer.id}`}>
            <BeerCard beer={beer} />
          </Link>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-6 gap-6">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-white font-semibold rounded-full shadow-md hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Anterior
        </button>

        <span className="text-gray-700 font-medium text-lg">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-white font-semibold rounded-full shadow-md hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Siguiente
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BeerListView;
