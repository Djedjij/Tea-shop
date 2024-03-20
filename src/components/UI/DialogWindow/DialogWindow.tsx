import React, { useEffect, useRef, useState } from "react";
import styles from "./DialogWindow.module.scss";

interface IChatProps {
  openChat: boolean;
  setOpenChat: (openChat: boolean) => void;
}

interface IChatMessage {
  text: string;
  role: string;
  time: () => string;
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
  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const helloInChat: IChatMessage = {
    text: "Здравствуйте! Чем мы можем вам помочь?",
    role: "admin",
    time: getTime,
  };

  const [chat, setChat] = useState<IChatMessage[]>([helloInChat]);
  const [message, setMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    }
  }, [chat]);

  const postMessage = (message: string) => {
    if (message) {
      setChat([...chat, { text: message, role: "user", time: getTime }]);
      setMessage("");
    }
  };

  const enterPostMessage = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (message) {
        postMessage(message);
        setMessage("");
      }
    }
  };
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
      <div
        ref={scrollRef}
        className={styles.chat}
        style={{ height: "300px", overflowY: "scroll" }}
      >
        {chat.map((message, index) => (
          <div
            className={
              message.role === "user" ? styles.messageRight : styles.messageLeft
            }
            key={index}
          >
            <p className={styles.messageText}>{message.text}</p>
            <p
              className={
                message.role === "user"
                  ? styles.messageTimeRight
                  : styles.messageTimeLeft
              }
            >
              {message.time()}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <textarea
          placeholder="Введите ваше сообщение"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={enterPostMessage}
        />
        <button
          className={styles.buttonInput}
          onClick={() => postMessage(message)}
        >
          <img src="/images/icons/icon-submitGreen.png" alt="" />
        </button>
      </div>
    </div>
  );
};
export default DialogWindow;
