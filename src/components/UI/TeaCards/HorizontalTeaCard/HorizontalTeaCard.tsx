import React, { useState } from "react";
import styles from "./HorizontalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
import { CSSTransition } from "react-transition-group";
import { shopCartAPI } from "../../../../services/shopCartService";
interface HorizontalTeaCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
  weight: number;
}

const HorizontalTeaCard: React.FC<HorizontalTeaCardProps> = (props) => {
  const [textVisible, setTextVisible] = useState<boolean>(false);

  const [postTea] = shopCartAPI.usePostTeaMutation();

  const addInShopCard = async (id: number, weight: number) => {
    postTea({ weight, id });
  };
  const handleVisible = () => {
    setTextVisible(!textVisible);
  };

  const zipText = (text: string) => {
    return (
      <p>
        {text.split(" ").splice(0, 30).join(" ")}
        {"..."}
        <button onClick={handleVisible} className={styles.visibleBtn}>
          Подробнее
        </button>
      </p>
    );
  };

  return (
    <div
      className={`${styles.horizontalCard} ${
        textVisible ? styles.enabled : styles.disabled
      } `}
    >
      <img src={props.img} alt={props.name} />
      <div className={styles.description}>
        <h3>{props.name}</h3>
        <CSSTransition
          in={textVisible}
          timeout={300}
          classNames={{
            enter: styles.textEnter,
            enterActive: styles.textEnterActive,
            exit: styles.textExit,
            exitActive: styles.textExitActive,
          }}
        >
          {textVisible ? (
            <p>
              {props.desc}{" "}
              <button onClick={handleVisible} className={styles.visibleBtn}>
                Свернуть описание
              </button>
            </p>
          ) : (
            zipText(props.desc)
          )}
        </CSSTransition>
        <p>{props.price}.00 p</p>
        <div className={styles.button}>
          <GreyButton
            text="В корзину"
            onClick={() => addInShopCard(props.id, props.weight)}
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalTeaCard;
