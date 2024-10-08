import React from "react";

type Props = {
  hero: Hero;
  heroesTypes: LangsDict["popular_heroes"]["types"];
};

function CardImageTitle({ hero, heroesTypes }: Props) {
  return (
    <div className="card-image-title">
      <div className="card-container">
        <div className="card-image">{/* image in div.background */}</div>.
        <div className="card-title">
          <div className="title">{hero.name}</div>
          <div className="type">
            {/* SVG here */}
            <span> {heroesTypes[hero.type]} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImageTitle;
