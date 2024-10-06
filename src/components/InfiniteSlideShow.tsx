import React from "react";

type Props = {};

function InfiniteSlideShow({}: Props) {
  return (
    <div className="infinite-slideshow">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <div className="bg-blue-700">1</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">2</div>
          </div>
          <div className="slide">
            <div className="bg-green-700">3</div>
          </div>
          <div className="slide">
            <div className="bg-blue-700">4</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">5</div>
          </div>
          <div className="slide">
            <div className="bg-green-700">6</div>
          </div>
          <div className="slide">
            <div className="bg-blue-700">7</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">8</div>
          </div>
          <div className="slide">
            <div className="bg-yellow-700">9</div>
          </div>

          {/* same slides */}

          <div className="slide">
            <div className="bg-blue-700">1</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">2</div>
          </div>
          <div className="slide">
            <div className="bg-green-700">3</div>
          </div>
          <div className="slide">
            <div className="bg-blue-700">4</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">5</div>
          </div>
          <div className="slide">
            <div className="bg-green-700">6</div>
          </div>
          <div className="slide">
            <div className="bg-blue-700">7</div>
          </div>
          <div className="slide">
            <div className="bg-red-700">8</div>
          </div>
          <div className="slide">
            <div className="bg-yellow-700">9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlideShow;
