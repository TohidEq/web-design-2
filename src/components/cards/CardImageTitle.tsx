import Link from "next/link";
import React from "react";
import {
  GiPocketBow,
  GiDrippingSword,
  GiHealthPotion,
  GiAbdominalArmor,
  GiMagicPalm,
} from "react-icons/gi";

type Props = {
  hero: Hero;
  heroesTypes: LangsDict["popular_heroes"]["types"];
};

function CardImageTitle({ hero, heroesTypes }: Props) {
  const heroesTypesIcons = [
    <GiPocketBow className="icon" key={0} />, // ------> archer
    <GiDrippingSword className="icon" key={1} />, // --> melee
    <GiHealthPotion className="icon" key={2} />, // ---> support
    <GiAbdominalArmor className="icon" key={3} />, // -> tank
    <GiMagicPalm className="icon" key={4} />, // ------> mage
  ];
  return (
    <div className="card-image-title">
      <Link href={hero.url} className="card-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${hero.img})` }}
        >
          {/* image in div.background */}
        </div>

        <div className="card-title">
          <div className="card-title-container">
            <div className="title">{hero.name}</div>
            <div className="type">
              {/* SVG here */}
              {heroesTypesIcons[hero.type]}
              <span className="name"> {heroesTypes[hero.type]} </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardImageTitle;
