import React, { useEffect, useState } from "react";
import styles from "./VerticalTeaCard.module.scss";
import GreyButton from "../../Buttons/GreyButton/GreyButton";
import { shopCartAPI } from "../../../../services/shopCartService";
import { Link } from "react-router-dom";
import { ITea } from "../../../../models/ITea";
import ImageLoader from "../../Loaders/ImageLoader";

interface VerticalTeaCardProps {
  tea: ITea;
  weight: number;
}

const VerticalTeaCard: React.FC<VerticalTeaCardProps> = ({ tea, weight }) => {
  const [postTea] = shopCartAPI.usePostTeaMutation();

  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoad(true);
    };
    img.src = tea.imagesLinks[0];
  }, [tea.imagesLinks]);

  const addInShopCard = async (id: number, weight: number) => {
    postTea({ weight, id });
  };

  return (
    <div className={styles.verticalCard}>
      {!imageLoad ? (
        <ImageLoader />
      ) : (
        <img
          className={styles.verticalCardImg}
          src={tea.imagesLinks[0]}
          alt=""
        />
      )}
      <Link to={`/shop/${tea.productId}`}>{tea.name}</Link>
      <div className={styles.price}>
        <div className={styles.buttons}>
          <GreyButton
            onClick={() => addInShopCard(tea.productId, weight)}
            text="В корзину"
          />
        </div>
        <p>{tea.price}.00 p</p>
      </div>
    </div>
  );
};

export default VerticalTeaCard;
