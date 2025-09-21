import { useEffect, useState } from "react";
import { IBeerData } from "../../types/interfaces";
import BeerInfoView from "../../pages/BeerInfoView/BeerInfoView";
import axios from "axios";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState<IBeerData>();

  const fetchRandomBeer = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/beers/random-beer"
      );
      setRandomBeer(res.data);
    } catch (error) {
      console.error("Error al obtener cerveza random:", error);
    }
  };
  useEffect(() => {
    fetchRandomBeer();
  }, []);

  const handleRandomBeerReload = () => {
    fetchRandomBeer();
  };

  return (
    <div>
      <BeerInfoView
        key={randomBeer?.id}
        beerPop={randomBeer}
        reloadBeer={handleRandomBeerReload}
      />
    </div>
  );
};

export default RandomBeer;
