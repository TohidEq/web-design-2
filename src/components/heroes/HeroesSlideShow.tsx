"use client";

import React, { useState } from "react";
import { FaArrowRight as FaArrowRightLite } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

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

  const [slideNumber, setSlideNumber] = useState(0);
  const allSlidesNumber = slides.length - 1;
  const nextSlide = () => {
    if (slideNumber + 1 > allSlidesNumber) setSlideNumber(0);
    else setSlideNumber(slideNumber + 1);
  };
  const prevSlide = () => {
    if (slideNumber - 1 < 0) setSlideNumber(allSlidesNumber);
    else setSlideNumber(slideNumber - 1);
  };

  const [moreDetails, setMoreDetails] = useState(false);

  return (
    <div className="heroes-slides">
      <div
        className="slide-bg"
        style={{ backgroundImage: `url("${slides[slideNumber].img_bg}")` }}
      ></div>
      <div className={`centerize ${!moreDetails && "container mx-auto"}`}>
        {dots}
        <div className="slide-container">
          <div className="slide-img">
            <div
              className="img"
              style={{ backgroundImage: `url("${slides[slideNumber].img}")` }}
            ></div>
          </div>
          <div className="slide-contents">
            <div
              className={`texts ${
                moreDetails ? "more-details" : "less-details"
              }`}
              onClick={() => setMoreDetails(false)}
            >
              <div className="texts-container">
                <h3 className="title">{slides[slideNumber].title}</h3>
                <span className="subtitle">{slides[slideNumber].subtitle}</span>
                <p className="description">{slides[slideNumber].description}</p>
              </div>
            </div>

            <button
              className={`more ${moreDetails && "hide"}`}
              onClick={() => setMoreDetails(true)}
            >
              {moreDetailed} <FaArrowRightLite className="svg" />
            </button>

            <div className="arrows">
              <FaArrowLeft className="svg left" onClick={() => prevSlide()} />
              <FaArrowRight className="svg right" onClick={() => nextSlide()} />
            </div>
          </div>
        </div>
      </div>
      {lineAndSquare}
    </div>
  );
}

export default HeroesSlideShow;
