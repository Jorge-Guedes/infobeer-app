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
