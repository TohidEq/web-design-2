"use client";
import React, { useState } from "react";
import CardImageContent from "../cards/CardImageContent";

type Props = {
  herosCards: LangsDict["heroes"]["cards"];
  watchMore: LangsDict["heroes"]["watch_more"];
  watchLess: LangsDict["heroes"]["watch_less"];
};

function HeroesCards({ herosCards, watchMore, watchLess }: Props) {
  const [showAll, setShowAll] = useState(false);

  const [hovCard, setHovCard] = useState("");

  const allCards = herosCards.map((card, key) => {
    return (
      <CardImageContent
        hoveredfunc={setHovCard}
        key={key}
        index={key + 1}
        image={card.img}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <div className={`heroes-cards`}>
      <div className={`heroes-cards-container ${showAll ? "all" : "few"}`}>
        <div className={`cards-container ${hovCard}`}>{allCards}</div>
      </div>
      <button className="show-all" onClick={() => setShowAll(!showAll)}>
        {showAll ? watchLess : watchMore}
      </button>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default HeroesCards;
