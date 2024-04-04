import React from "react";
import styles from "./Comment.module.scss";
import { IReview } from "../../../models/ITea";

interface IReviewProps {
  review: IReview;
}

const Review: React.FC<IReviewProps> = ({ review }) => {
  const { userEmail, comment, timestamp } = review;
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <h4>{userEmail.split("")[0]}</h4>
      </div>
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <h4 className={styles.name}>{userEmail}</h4>
          <h4 className={styles.date}>{timestamp}</h4>
        </div>
        <div>
          <p className={styles.text}>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
