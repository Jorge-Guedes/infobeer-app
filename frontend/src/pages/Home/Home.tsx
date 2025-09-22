import { Link } from "react-router-dom";
import CarouselHome from "../../components/Carousel/CarouselHome";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row relative">
      <div className="w-full h-64 lg:h-auto lg:w-1/2">
        <CarouselHome />
      </div>
      <div className="absolute lg:relative inset-0 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-8 lg:px-16 py-12 lg:py-24 gap-6 bg-black/40 lg:bg-transparent">
        <div className="text-center lg:text-left">
          <h1 className="junius-irish text-4xl lg:text-5xl text-white lg:text-amber-900 font-bold">
            INFOBEER
          </h1>
          <p className="junius-irish text-white lg:text-gray-700 text-base lg:text-lg max-w-md leading-relaxed mt-4">
            Bienvenido al fascinante mundo de la cerveza. Descubre estilos
            únicos, desde IPAs refrescantes hasta robustas Belgian Dark Ales, y
            encuentra la cerveza perfecta para tu paladar.
          </p>
          <Link to="/categories" className="inline-block mt-6">
            <button className="px-6 py-2 bg-amber-600 lg:bg-amber-700 text-white rounded-full hover:bg-amber-700 lg:hover:bg-amber-800 transition-all duration-300 shadow-lg">
              Explorar categorías
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
