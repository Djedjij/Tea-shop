import React, { useState } from "react";
import styles from "./DialogWindow.module.scss";

interface IChatProps {
  openChat: boolean;
  setOpenChat: (openChat: boolean) => void;
}

const DialogWindow = () => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div>
      <button
        className={styles.buttonIcon}
        onClick={() => setOpenChat(!openChat)}
      >
        <img
          className={styles.chatIcon}
          src="/images/icons/icon-chat.png"
          alt=""
        />
      </button>
      {openChat && <Chat openChat={openChat} setOpenChat={setOpenChat} />}
    </div>
  );
};

const Chat: React.FC<IChatProps> = ({ setOpenChat }) => {
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatHeader}>
        <h5>Напишите ваше сообщение!</h5>
        <button
          className={styles.crossButton}
          onClick={() => setOpenChat(false)}
        >
          <img src="/images/icons/icon-crossWhite.svg" alt="" />
        </button>
      </div>
      <div className={styles.chat}>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
        <div className={styles.message}>
          Здравствуйте! Чем мы можем вам помочь?
        </div>
      </div>
      <div className={styles.chatInput}>
        <textarea placeholder="Введите ваше сообщение" />
        <button className={styles.buttonInput}>
          <img src="/images/icons/icon-submitGreen.png" alt="" />
        </button>
      </div>
    </div>
  );
};
export default DialogWindow;
