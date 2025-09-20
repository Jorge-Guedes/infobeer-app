import { IBeerData } from "../../types/interfaces";

type BeerCardProps = {
  beer: IBeerData;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <div className="flex flex-col w-60 text-center transition-transform hover:scale-110">
      <img
        src={beer.img}
        className="rounded-lg border-[2px] border-amber-300"
      />
      <h1 className="junius-irish text-[25px] text-gray-600">{beer.name}</h1>
    </div>
  );
};

export default BeerCard;
