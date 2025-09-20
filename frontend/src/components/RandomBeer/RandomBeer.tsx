import { useEffect, useState } from "react";
import { IBeerData } from "../../types/interfaces";
import BeerInfoView from "../../pages/BeerInfoView/BeerInfoView";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState<IBeerData>();

  const categoriesJson = [
    "Belgian_Dark_Strong_Ale_&_Quadrupel.json",
    "Brown_&_Amber_Ale.json.json",
    "Dubbel.json",
    "IPAs.json",
    "Lager.json",
    "Lambic.json",
    "Pale_Ale.json",
    "Porter.json",
    "Trigo.json",
    "Tripel.json",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomIndexCategories = Math.floor(
          Math.random() * categoriesJson.length
        );
        const jsonPath = `../../../public/data/${categoriesJson[randomIndexCategories]}`;
        const response = await fetch(jsonPath);
        const currentCategory = await response.json();

        const randomIndexBeer = Math.floor(
          Math.random() * currentCategory.length
        );
        const currentBeer = currentCategory[randomIndexBeer];
        setRandomBeer(currentBeer);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleRandomBeerReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <BeerInfoView
        key={randomBeer?._id}
        beerPop={randomBeer}
        reloadBeer={handleRandomBeerReload}
      />
    </div>
  );
};

export default RandomBeer;
