import React, { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = (props: any) => {
  const settings = {
    pageWidth: 300,
  };
  const [offset, setOffset] = useState(0);
  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + settings.pageWidth;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - settings.pageWidth;
      const maxOffset = -(settings.pageWidth * (props.images.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className={styles.mainContainer}>
      <span onClick={handleLeftClick}>{"<"}</span>
      <div className={styles.window}>
        <div
          className={styles.allItems}
          style={{ transform: `translateY(${offset}px)` }}
        >
          {props.images.map((img: string) => (
            <img
              style={{
                minHeight: `${settings.pageWidth}px`,
                maxHeight: `${settings.pageWidth}px`,
              }}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
      <span onClick={handleRightClick}>{">"}</span>
    </div>
  );
};

export default Slider;
