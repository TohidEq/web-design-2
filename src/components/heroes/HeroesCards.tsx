import React from "react";
import CardImageContent from "../cards/CardImageContent";

type Props = {
  herosCards: LangsDict["heroes"]["cards"];
  watchMore: LangsDict["heroes"]["watch_more"];
};

function HeroesCards({ herosCards, watchMore }: Props) {
  return (
    <div className="heroes-cards">
      <div className="heroes-cards-container">
        <div className="cards-container">
          {herosCards.map((card, key) => {
            return (
              <CardImageContent
                key={key}
                image={card.img}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
        <button className="show-all">{watchMore}</button>
      </div>
    </div>
  );
}

export default HeroesCards;
