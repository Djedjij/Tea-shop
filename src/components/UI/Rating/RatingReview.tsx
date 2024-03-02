import React, { useState } from "react";
import styles from "./Rating.module.scss";

const ratingValues = [1, 2, 3, 4, 5];
const RatingReview = () => {
  const [ratingValue, setRatingValue] = useState(1);
  return (
    <div className={styles.rating}>
      {" "}
      <div className={styles.ratingBody}>
        <div
          className={styles.ratingActive}
          style={{ width: `${ratingValue / 0.05}%` }}
        >
          {" "}
        </div>
        <div className={styles.ratingItems}>
          {ratingValues.map((value) => (
            <div
              className={styles.ratingItem}
              key={value}
              onMouseEnter={() => {
                setRatingValue(value);
              }}
              onClick={() => setRatingValue(value)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingReview;
