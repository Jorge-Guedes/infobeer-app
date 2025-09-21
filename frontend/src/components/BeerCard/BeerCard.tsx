import { IBeerData } from "../../types/interfaces";

type BeerCardProps = {
  beer: IBeerData;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <div className="flex flex-col w-64 h-96 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="h-4/5 w-full overflow-hidden">
        <img
          src={beer.img}
          alt={beer.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="h-1/5 flex items-center justify-center p-2">
        <h1 className="junius-irish text-lg text-gray-700 text-center truncate">
          {beer.name}
        </h1>
      </div>
    </div>
  );
};

export default BeerCard;
