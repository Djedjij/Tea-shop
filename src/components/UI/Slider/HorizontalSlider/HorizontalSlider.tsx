import React, { useRef, useState } from "react";
import styles from "./HorizontalSlider.module.scss";
interface IHorizontalSliderProps {
  images: string[];
}
const HorizontalSlider: React.FC<IHorizontalSliderProps> = ({ images }) => {
  const pageHeight = 400;
  const pageWidth = 400;
  const sliderLength = pageWidth * images.length;

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragDistance = useRef(0);

  const slideLeft = () => {
    setOffset(offset < 400 ? offset : offset - pageWidth);
  };
  const slideRight = () => {
    setOffset(offset < sliderLength - pageWidth ? offset + pageWidth : offset);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    dragDistance.current = 0;
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const delta = e.clientX - dragStart.current;
      setOffset((prevOffset) =>
        Math.min(Math.max(prevOffset + delta, 0), sliderLength - pageWidth)
      );
      setOffset((prevOffset) => Math.max(prevOffset + e.clientX / 10, 0));
      dragDistance.current += delta;
      dragStart.current = e.clientX;
      console.log(delta);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragDistance.current < -50) {
      setOffset((prevOffset) =>
        Math.min(prevOffset + pageWidth, sliderLength - pageWidth)
      );
    } else if (dragDistance.current > 50) {
      setOffset((prevOffset) => Math.max(prevOffset - pageWidth, 0));
    }
  };
  return (
    <div
      className={styles.mainContainer}
      style={{ height: `${pageHeight}px`, width: `${pageWidth}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <span onClick={() => slideLeft()}>{"<"}</span>
      <div className={styles.window}>
        <div
          className={styles.allItems}
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {images.map((img: string, index) => (
            <img
              style={{
                minHeight: `${pageHeight}px`,
                maxHeight: `${pageWidth}px`,
              }}
              src={img}
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
      <span onClick={() => slideRight()}>{">"}</span>
    </div>
  );
};

export default HorizontalSlider;
