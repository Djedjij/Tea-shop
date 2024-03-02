import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import Modal from "../Modal/Modal";
import ModalReview from "./ModalReview";

const Reviews = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.emptyReviews}>
        <h3>На этот отвар еще нет отзывов</h3>
        <div>
          <GreyButton
            text="Добавить отзыв"
            onClick={() => setActiveModal(true)}
          />
        </div>
      </div>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <ModalReview />
      </Modal>
    </div>
  );
};

export default Reviews;
