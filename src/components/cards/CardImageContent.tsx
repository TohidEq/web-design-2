import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

function CardImageContent({ image, title, description }: Props) {
  return (
    <div className="card-image-content">
      <div className="card-container">
        <div className="card-image">
          <div
            className="img w-20 h-20"
            style={{ background: `url(${image})` }}
          ></div>
        </div>
        <div className="card-content">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default CardImageContent;
