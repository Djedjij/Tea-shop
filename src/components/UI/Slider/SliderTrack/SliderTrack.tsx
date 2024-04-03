import React from "react";
import styles from "./SliderTrack.module.scss";
import ImageLoader from "../../Loaders/ImageLoader";

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
          <div
            className={styles.sliderTrackImg}
            key={img}
            style={{
              height: `${heightOneElement - 4}px`,
              width: `${heightOneElement - 4}px`,
            }}
            onClick={() => handleBorderTranslate(index)}
          >
            <ImageLoader src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderTrack;
