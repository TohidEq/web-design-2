"use client";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  index: number;
  hoveredfunc: React.Dispatch<React.SetStateAction<string>>;
};

function CardImageContent({
  image,
  title,
  description,
  index,
  hoveredfunc,
}: Props) {
  return (
    <div
      className="card-image-content"
      onMouseEnter={() => hoveredfunc("hovered")}
      onMouseLeave={() => hoveredfunc("")}
    >
      <div className="card-container">
        <div className="card-image">
          <div
            className="img"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="card-content">
          <div className="title">
            {index}. {title}
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default CardImageContent;
