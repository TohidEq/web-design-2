import React from "react";

type Props = { images: LangsDict["subscription"]["images"] };

function ImagesInOne({ images }: Props) {
  return (
    <div className="images-in-one">
      <div className="iio-container">
        <ul className="images">
          {images.map((image, key) => {
            return (
              <div className="image-keeper" key={key}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ImagesInOne;
