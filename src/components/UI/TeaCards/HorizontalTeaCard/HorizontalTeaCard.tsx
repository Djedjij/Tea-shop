import React, { useState } from "react";
import styles from "./HorizontalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
import { CSSTransition } from "react-transition-group";
import { shopCartAPI } from "../../../../services/shopCartService";
import { Link } from "react-router-dom";
import { ITea } from "../../../../models/ITea";
import LikeButton from "../../Buttons/LikeButton/LikeButton";
interface HorizontalTeaCardProps {
  tea: ITea;
  weight: number;
  isFavoriteTea?: true;
}

const HorizontalTeaCard: React.FC<HorizontalTeaCardProps> = ({
  tea,
  weight,
  isFavoriteTea,
}) => {
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
      <img
        className={styles.horizontalCardImg}
        src={tea.imagesLinks[0]}
        alt={tea.name}
      />
      <div className={styles.description}>
        <Link to={`/shop/${tea.productId}`}>{tea.name}</Link>
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
              {tea.description}
              <button onClick={handleVisible} className={styles.visibleBtn}>
                Свернуть описание
              </button>
            </p>
          ) : (
            zipText(tea.description)
          )}
        </CSSTransition>
        <p>{tea.price}.00 p</p>
        <div className={styles.buttons}>
          <GreyButton
            text="В корзину"
            onClick={() => addInShopCard(tea.productId, weight)}
          />
          <LikeButton tea={tea} isFavoriteTea={isFavoriteTea} />
        </div>
      </div>
    </div>
  );
};

export default HorizontalTeaCard;
