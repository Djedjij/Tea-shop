import React from "react";
import styles from "./Comment.module.scss";
import { IComment } from "../../../models/IPost";

const Comment: React.FC<IComment> = ({ userName, date, text }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <h4>{userName.split("")[0]}</h4>
      </div>
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <h4 className={styles.name}>{userName}</h4>
          <h4 className={styles.date}>{date}</h4>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
