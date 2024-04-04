import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import Modal from "../Modal/Modal";
import ModalReview from "./ModalReview";
import { IReview } from "../../../models/ITea";

import Review from "../Comment/Review";

interface IReviewsProps {
  reviews: IReview[];
  productId: number;
}

const Reviews: React.FC<IReviewsProps> = ({ reviews, productId }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => <Review review={review} key={review.id} />)
      ) : (
        <div className={styles.emptyReviews}>
          <h3>На этот отвар еще нет отзывов</h3>
        </div>
      )}
      <div className={styles.reviewButton}>
        <GreyButton
          text="Добавить отзыв"
          onClick={() => setActiveModal(true)}
        />
      </div>

      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <ModalReview productId={productId} />
      </Modal>
    </div>
  );
};

export default Reviews;
