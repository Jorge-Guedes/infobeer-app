import { useState } from "react";

type ButtonRandomProps = {
  randomBeerReload: () => void;
};

export const ButtonRandom = ({ randomBeerReload }: ButtonRandomProps) => {
  const [imageButton, setImageButton] = useState("src/assets/buttonBeer1.jpg");

  const changeImage2 = () => {
    setImageButton("src/assets/buttonBeer2.jpg");
  };

  const changeImage1 = () => {
    setImageButton("src/assets/buttonBeer1.jpg");
  };

  return (
    <div
      className="w-12 -rotate-90 hover:scale-125 hover:rotate-12 duration-150 border-[1px] border-black rounded-full"
      onMouseEnter={changeImage2}
      onMouseLeave={changeImage1}
    >
      <img
        src={imageButton}
        alt="random_button_beer"
        className="rounded-full cursor-pointer"
        onClick={randomBeerReload}
      />
    </div>
  );
};
