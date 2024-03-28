import React, { useEffect, useState } from "react";
import styles from "./LikeButton.module.scss";
import { useAppDispatch } from "../../../../hooks/hooks";
import { setModalError } from "../../../../store/redusers/errorSlice";
import { ITea } from "../../../../models/ITea";
import {
  removeFavoriteTea,
  setFavoriteTea,
} from "../../../../store/redusers/teasSlice";

interface ILikeButtonProps {
  tea: ITea;
}

const LikeButton: React.FC<ILikeButtonProps> = ({ tea }) => {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const addInFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      dispatch(setFavoriteTea(tea));
    } else {
      setIsFavorite(false);
      dispatch(removeFavoriteTea(tea.productId));
    }
  };

  useEffect(() => {
    if (isFavorite) {
      dispatch(setModalError('Товар добавлен в "Избранные"'));
    }
  }, [isFavorite, dispatch]);
  return (
    <div className={styles.likeButton}>
      {isFavorite ? (
        <img
          onClick={() => addInFavorite()}
          src="/images/icons/heartPink.svg"
          alt=""
        />
      ) : (
        <img
          onClick={() => addInFavorite()}
          src="/images/icons/heart.svg"
          alt=""
        />
      )}
    </div>
  );
};

export default LikeButton;
