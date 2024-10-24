import React from "react";
import { FaArrowRight as FaArrowRightLite } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  moreDetailed: LangsDict["heroes"]["more_detailed"];
  slides: LangsDict["heroes"]["slides"];
};

function HeroesSlideShow({ moreDetailed, slides }: Props) {
  const dots = (
    <div className="dots">
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((opacityNumber, key) => {
        return (
          <div
            key={key}
            className="dot"
            style={{ opacity: `${opacityNumber}%` }}
          ></div>
        );
      })}
    </div>
  );
  const lineAndSquare = (
    <div className="line-square">
      <div className="line">
        <span className="square"></span>
      </div>
    </div>
  );

  return (
    <div className="heroes-slides ">
      HeroesSlideShow
      <div className="test">{dots}</div>
      <div className="test2">{lineAndSquare}</div>
    </div>
  );
}

export default HeroesSlideShow;
