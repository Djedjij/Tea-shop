import React, { useState } from "react";
import styles from "./SliderTrack.module.scss";
const SliderTrack = (props: any) => {
  const maxHeight = 300;
  const [borderCurrent, setBorderCurrent] = useState(0);
  const handleBorder = () => {
    //
  };
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          maxHeight: `${maxHeight / props.images.length - 4}px`,
          maxWidth: `${maxHeight / props.images.length - 4}px`,
          transform: `translateY(${borderCurrent}px)`,
        }}
        className={styles.border}
      ></div>
      {props.images.map((img: string) => (
        <img
          key={img}
          style={{
            maxHeight: `${maxHeight / props.images.length - 4}px`,
            maxWidth: `${maxHeight / props.images.length - 4}px`,
          }}
          src={img}
          alt=""
        />
      ))}
    </div>
  );
};

export default SliderTrack;
