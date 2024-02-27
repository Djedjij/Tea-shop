import React, { useState } from "react";
import Slider from "./Slider";
import SliderTrack from "./SliderTrack/SliderTrack";
import styles from "./Carousel.module.scss";
interface ICarouselProps {
  images: string[];
  pageWidth: number;
  pageHeight: number;
}

const Carousel: React.FC<ICarouselProps> = ({
  images,
  pageWidth,
  pageHeight,
}) => {
  const [borderCurrent, setBorderCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const heightOneElement = pageHeight / images.length;

  const handleBorderTranslate = (index: number) => {
    setBorderCurrent(heightOneElement * index);
    setOffset(pageHeight * index);
  };

  return (
    <div className={styles.wrapper}>
      <SliderTrack
        heightOneElement={heightOneElement}
        handleBorderTranslate={handleBorderTranslate}
        pageHeight={pageHeight}
        images={images}
        borderCurrent={borderCurrent}
      />
      <Slider
        pageWidth={pageWidth}
        pageHeight={pageHeight}
        images={images}
        offset={offset}
      />
    </div>
  );
};

export default Carousel;
