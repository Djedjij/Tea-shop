import React, { useRef, useState } from "react";
import styles from "./HorizontalSlider.module.scss";
import { IImage } from "../../../../utils/consts";
interface IHorizontalSliderProps {
  images: IImage[];
}
const HorizontalSlider: React.FC<IHorizontalSliderProps> = ({ images }) => {
  const pageHeight = 600;
  const pageWidth = 800;
  const sliderLength = pageWidth * images.length;
  const [offset, setOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeDot, setActiveDot] = useState<number>(0);

  const dragStart = useRef(0);
  const dragDistance = useRef(0);
  const dotsArray: number[] = [];

  for (let i = 0; i <= images.length - 1; i++) {
    dotsArray.push(i);
  }

  const slideLeft = () => {
    setOffset(offset < pageWidth ? offset : offset - pageWidth);
    setActiveDot((prevDot) => (prevDot > 0 ? prevDot - 1 : prevDot));
  };
  const slideRight = () => {
    setOffset(offset < sliderLength - pageWidth ? offset + pageWidth : offset);
    setActiveDot((prevDot) =>
      prevDot < dotsArray.length - 1 ? prevDot + 1 : prevDot
    );
  };

  const dotSlide = (dotNumber: number) => {
    setOffset(pageWidth * dotNumber);
    setActiveDot(dotNumber);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    dragDistance.current = offset;
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const delta = dragStart.current - e.clientX;
      setOffset(
        Math.min(
          Math.max(dragDistance.current + delta, 0),
          sliderLength - pageWidth
        )
      );
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    dragStart.current = 0;
    const indexImg = Math.round(offset / pageWidth);
    setOffset(pageWidth * indexImg);
    setActiveDot(indexImg);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.mainContainer}
        style={{ height: `${pageHeight}px`, width: `${pageWidth}px` }}
      >
        <img
          onClick={() => slideLeft()}
          className={styles.arrowLeft}
          src="/images/icons/icon-arrowRightBrown.svg"
          alt=""
        />

        <div
          className={styles.window}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className={styles.allItems}
            style={{
              transform: `translateX(${-offset}px)`,
              transitionDuration: `${isDragging ? "0ms" : "250ms"}`,
            }}
          >
            {images.map((img, index) => (
              <img
                style={{
                  minWidth: `${pageWidth}px`,
                  maxWidth: `${pageWidth}px`,
                }}
                src={img.img}
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
        <img
          onClick={() => slideRight()}
          className={styles.arrowRight}
          src="/images/icons/icon-arrowRightBrown.svg"
          alt=""
        />
      </div>
      <div className={styles.dots}>
        {dotsArray.map((dot) => (
          <span
            onClick={() => dotSlide(dot)}
            className={`${
              activeDot === dot ? `${styles.active} ${styles.dot}` : styles.dot
            }`}
            key={dot}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
