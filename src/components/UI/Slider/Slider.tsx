import React, { useState } from "react";
import styles from "./Slider.module.scss";

interface ISliderProps {
  images: string[];
  pageWidth: number;
  pageHeight: number;
  offset: number;
}
const Slider: React.FC<ISliderProps> = ({
  images,
  pageWidth,
  pageHeight,
  offset,
}) => {
  return (
    <div
      className={styles.mainContainer}
      style={{ height: `${pageHeight}px`, width: `${pageWidth}px` }}
    >
      <div className={styles.window}>
        <div
          className={styles.allItems}
          style={{ transform: `translateY(${-offset}px)` }}
        >
          {images.map((img: string) => (
            <img
              style={{
                minHeight: `${pageHeight}px`,
                maxHeight: `${pageWidth}px`,
              }}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
