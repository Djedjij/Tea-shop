import React, { useEffect, useState } from "react";
import styles from "./Rating.module.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import { setModalError } from "../../../store/redusers/errorSlice";
const Rating = () => {
  const [ratingState, setRatingState] = useState(3.7);
  const [ratingValue, setRatingValue] = useState(ratingState);
  const [errorToken, setErrorToken] = useState(false);
  const ratingValues = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch();
  const fetchRating = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      setErrorToken(true);
    }
  };
  useEffect(() => {
    if (errorToken) {
      dispatch(
        setModalError(
          "Рейтинг могут выставлять только авторизованные пользователи"
        )
      );
    }
  }, [errorToken, dispatch]);

  // Убрать потом
  setRatingState(ratingState);
  //

  return (
    <div className={styles.rating}>
      {" "}
      <h5>Рейтинг: </h5>
      <div className={styles.ratingBody}>
        <div
          className={styles.ratingActive}
          style={{ width: `${ratingValue / 0.05}%` }}
        >
          {" "}
        </div>
        <div className={styles.ratingItems}>
          {ratingValues.map((value) => (
            <div
              className={styles.ratingItem}
              key={value}
              onMouseEnter={() => {
                setRatingValue(value);
              }}
              onMouseLeave={() => setRatingValue(ratingState)}
              onClick={() => fetchRating()}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.ratingValue}>{ratingState}</div>
    </div>
  );
};

export default Rating;
