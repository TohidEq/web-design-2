"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  items: {
    title: string;
    img: string;
    url: string;
  }[];

  dots?: boolean;
  arrows?: boolean;
};
//                       { items }: Props
function SlideShowImages({ items, dots, arrows }: Props) {
  const [index, setIndex] = useState(0);

  //
  //  Auto Play
  //
  /* const timeoutRef = useRef(null);
  const delay = 9000;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index, items.length]);
  */

  return (
    <div className="slideshow">
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {items.map((item, index) => (
          <div key={`${item.title}-${index}`} className="slide ">
            <Link href={item.url} className="slide-container">
              <div className="slide-contents">
                <div className="slide-image">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                </div>
                <div className="slide-title">{item.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {dots && (
        <div className="slideshow-dots">
          {items.map((_, i) => (
            <div
              key={`${i}`}
              className={`slideshow-dot ${index === i ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
            ></div>
          ))}
        </div>
      )}
      {arrows && (
        <div className="slideshow-arrows">
          <div className="arrows">
            <div
              className="arrow left"
              onClick={() => {
                setIndex((prevIndex) =>
                  prevIndex === 0 ? items.length - 1 : prevIndex - 1
                );
              }}
            >
              <FaArrowLeft />
            </div>
            <div
              className="arrow right"
              onClick={() => {
                setIndex((prevIndex) =>
                  prevIndex === items.length - 1 ? 0 : prevIndex + 1
                );
              }}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SlideShowImages;
