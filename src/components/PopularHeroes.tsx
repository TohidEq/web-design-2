"use client";
import { useState } from "react";
import InfiniteSlideShow from "./InfiniteSlideShow";

type Props = {
  popular_heroes: LangsDict["popular_heroes"];
};

// GiPocketBow archer
//

function PopularHeroes({ popular_heroes }: Props) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="popular-heroes">
      <div className="popular-heroes-texts">
        <h2 className="title">{popular_heroes.title}</h2>
        <p className="text">{popular_heroes.text}</p>
        <button
          className="show-all-btn"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {popular_heroes.watch_all}
        </button>
      </div>

      <div className="popular-heroes-slideshow">
        <InfiniteSlideShow
          show_all={showAll}
          reverse_sliding={false}
          heroes={popular_heroes.heroes}
        />
        <InfiniteSlideShow
          show_all={showAll}
          reverse_sliding={true}
          heroes={popular_heroes.heroes}
        />
      </div>
    </div>
  );
}

export default PopularHeroes;
