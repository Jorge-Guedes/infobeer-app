import React from "react";
import { useState } from "react";
import buttonBeer1 from "../../assets/buttonBeer1.jpg";
import buttonBeer2 from "../../assets/buttonBeer2.jpg";

type ButtonRandomProps = {
  randomBeerReload?: () => void;
};

export const ButtonRandom = ({ randomBeerReload }: ButtonRandomProps) => {
  const [imageButton, setImageButton] = useState(buttonBeer1);

  const changeImage2 = () => setImageButton(buttonBeer2);
  const changeImage1 = () => setImageButton(buttonBeer1);

  return (
    <div
      className="hidden lg:block lg:absolute lg:-rotate-90 hover:scale-125 hover:rotate-12 duration-150 border-[1px] border-black rounded-full lg:left-[13.5%]"
      onMouseEnter={changeImage2}
      onMouseLeave={changeImage1}
    >
      <img
        src={imageButton}
        alt="random_button_beer"
        className="rounded-full cursor-pointer w-16 h-16"
        onClick={randomBeerReload}
      />
    </div>
  );
};
