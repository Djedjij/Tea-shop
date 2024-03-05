import React from "react";
import styles from "./Modal.module.scss";

interface IModalProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  activeModal,
  setActiveModal,
  children,
}) => {
  return (
    <div
      className={`${styles.modal} ${activeModal ? styles.active : ""}`}
      onClick={() => setActiveModal(false)}
    >
      <div
        className={`${styles.modalContent} ${
          activeModal && styles.activeContent
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
