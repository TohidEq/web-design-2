"use client";
import React from "react";
import CardImageTitle from "./cards/CardImageTitle";

type Props = {
  heroes: LangsDict["popular_heroes"]["heroes"];
  heroesTypes: LangsDict["popular_heroes"]["types"];
  show_all: boolean;
  reverse_sliding: boolean;
};

function InfiniteSlideShow({
  heroes,
  heroesTypes,
  show_all,
  reverse_sliding,
}: Props) {
  const content = heroes.map((hero, key) => {
    // generate random key
    const randomKey = `${key}-${key + Math.random().toString(16).slice(2)}`;

    return (
      <CardImageTitle key={randomKey} hero={hero} heroesTypes={heroesTypes} />
    );
  });

  return (
    <div className={`slider ${!show_all && "slideshow-animation"} `}>
      <div className={`slide-track ${reverse_sliding && "reversed"}`}>
        {content}
        {/* same slide (if not want to show all) */}
        {!show_all && content}
      </div>
    </div>
  );
}

export default InfiniteSlideShow;
