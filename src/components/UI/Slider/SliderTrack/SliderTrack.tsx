import React from "react";
import styles from "./SliderTrack.module.scss";

interface ISliderTrackProps {
  images: string[];
  pageHeight: number;
  borderCurrent: number;
  heightOneElement: number;
  handleBorderTranslate: (index: number) => void;
}
const SliderTrack: React.FC<ISliderTrackProps> = ({
  images,
  pageHeight,
  borderCurrent,
  handleBorderTranslate,
  heightOneElement,
}) => {
  return (
    <div>
      <div style={{ height: pageHeight }} className={styles.wrapper}>
        <span
          style={{
            width: `${heightOneElement - 4}px`,
            height: `${heightOneElement - 8}px`,
            transform: `translateY(${borderCurrent}px)`,
          }}
          className={styles.border}
        ></span>
        {images.map((img: string, index: number) => (
          <img
            className={styles.sliderTrackImg}
            key={img}
            style={{
              maxHeight: `${heightOneElement - 4}px`,
              maxWidth: `${heightOneElement - 4}px`,
              marginTop: "2px",
              marginBottom: "2px",
            }}
            onClick={() => handleBorderTranslate(index)}
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default SliderTrack;
