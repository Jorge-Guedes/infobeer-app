import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBeerData } from "../../types/interfaces";
import { ButtonRandom } from "../../components/ButtonRandom/ButtonRandom";
import axios from "axios";

type BeerInfoViewProps = {
  beerPop?: IBeerData;
  reloadBeer?: () => void;
};

const BeerInfoView = ({ beerPop, reloadBeer }: BeerInfoViewProps) => {
  const { id } = useParams();

  const [beer, setBeer] = useState<IBeerData>();

  useEffect(() => {
    const fetchInfoBeer = async () => {
      try {
        if (beerPop) {
          setBeer(beerPop);
        } else if (id) {
          const res = await axios.get<IBeerData>(
            `http://localhost:3000/api/beers/${id}`
          );
          setBeer(res.data);
        }
      } catch (error) {
        console.error("Error fetching beer:", error);
      }
    };

    fetchInfoBeer();
  }, []);

  const renderInfo: { name: string; property: keyof IBeerData }[] = [
    { name: "Origen:", property: "origin" },
    { name: "Color:", property: "color" },
    { name: "Estilo:", property: "style" },
    { name: "Grado:", property: "grade" },
    { name: "IBU:", property: "ibu" },
    { name: "Sabor:", property: "flavor" },
  ];

  return (
    <div className="flex flex-col justify-center pt-3">
      <div className="flex items-center justify-center gap-2 p-2">
        {!!beerPop && <ButtonRandom randomBeerReload={reloadBeer} />}
        <h1 className="junius-irish font-semibold text-[35px] text-gray-600">
          {beer?.name}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-center self-center w-[80%] lg:gap-20 gap-10 p-5">
        <div className="lg:min-w-[35%] max-w-[60%] lg:self-start self-center">
          <img
            src={beer?.img}
            alt={beer?.name}
            className="rounded-lg border-[2px] border-amber-600"
          />
        </div>
        <div className="flex flex-col self-center lg:max-w-[40%] lg:self-start md:gap-6 gap-12 h-full junius-irish text-gray-600 text-[20px]">
          <div className="flex flex-col gap-6 p-5">
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <h3 className="font-semibold">Fabricante:</h3>
                <p>{beer?.maker}</p>
              </div>
              <div className="w-12">
                <img
                  src={beer?.maker_logo}
                  alt={beer?.maker}
                  className="rounded-lg border-[2px] border-amber-900 p-1"
                />
              </div>
            </div>
            {renderInfo.map((item) => (
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>{beer?.[item.property]}</p>
                </div>
              </div>
            ))}
          </div>
          {beer?.ingredients && beer.ingredients.length > 13 && (
            <div>
              <div className="flex items-center h-full p-5">
                <h3 className="font-medium">
                  <span className="font-semibold">Ingredientes:</span>
                  {beer.ingredients.replace("Ingredientes:", "")}
                </h3>
              </div>
            </div>
          )}
          {beer?.graphic_color != "" && (
            <div className="p-5">
              <img src={beer?.graphic_color} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeerInfoView;
