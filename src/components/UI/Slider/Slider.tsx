import React from "react";
import styles from "./Slider.module.scss";
import ImageLoader from "../Loaders/ImageLoader";

interface ISliderProps {
  images: string[];
  pageWidth: number;
  pageHeight: number;
  offset: number;
  onClick?: () => void;
}
const Slider: React.FC<ISliderProps> = ({
  images,
  pageWidth,
  pageHeight,
  offset,
  onClick,
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
            <ImageLoader
              minHeightImg={pageHeight}
              minWidthImg={pageWidth}
              src={img}
              onClick={() => onClick && onClick()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
