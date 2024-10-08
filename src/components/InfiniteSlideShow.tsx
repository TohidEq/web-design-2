"use client";
import React from "react";

type Props = {
  heroes: LangsDict["popular_heroes"]["heroes"];
  show_all: boolean;
  reverse_sliding: boolean;
};

// GiPocketBow archer
//

// TODO: reversed sliding CSSS

function InfiniteSlideShow({ heroes, show_all, reverse_sliding }: Props) {
  return (
    <div className={`slider ${!show_all && "slideshow-animation"} `}>
      <div className={`slide-track ${reverse_sliding && "reversed"}`}>
        <div className="slide w-40">
          <div className="bg-yellow-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-gray-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-green-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-red-700">1</div>
        </div>

        {/* same slide w-40s */}

        <div className="slide w-40">
          <div className="bg-yellow-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-gray-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-green-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-blue-700">1</div>
        </div>
        <div className="slide w-40">
          <div className="bg-red-700">1</div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlideShow;
