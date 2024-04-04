import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import GreenButton from "../Buttons/GreenButton/GreenButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { login } from "../../../store/fetchUser";
import RatingReview from "../Rating/RatingReview";
import { reviewAPI } from "../../../services/reviewServise";
import { IReview } from "../../../models/ITea";
import { setModalError } from "../../../store/redusers/errorSlice";
import { createMonthDate } from "../../../utils/functions";

interface IModalReviewProps {
  productId: number;
}

const ModalReview: React.FC<IModalReviewProps> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const stateEmail = useAppSelector((state) => state.user.user.email);
  const [postReview] = reviewAPI.usePostReviewMutation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (stateEmail) {
      setUserEmail(stateEmail);
    } else if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user");
      if (user) {
        setUserEmail(JSON.parse(user).email);
      }
    }
  }, [stateEmail]);

  const reviewObject: IReview = {
    id: productId,
    userEmail: userEmail,
    rating: 5,
    comment: review,
    timestamp: createMonthDate(),
  };

  const sendReview = (e: any) => {
    e.preventDefault();
    if (review) {
      postReview(reviewObject);
      console.log(reviewObject);

      setReview("");
    } else dispatch(setModalError("Отзыв не можен быть пустым"));
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError(`Поле "Email" не может быть пустым`);
    } else {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailRegex.test(email)
        ? setEmailError("")
        : setEmailError("Неверно указан Email");
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError(`Поле "Пароль" не может быть пустым`);
    } else if (password.length < 4) {
      setPasswordError("Пароль слишком короткий");
    } else if (password.length > 10) {
      setPasswordError("Пароль слишком длинный ");
    }
  };

  const goLogin = async (event: any) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError || !passwordError) {
      dispatch(login({ password, email }));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.modalReview}>
      <div className={styles.modalReviewContent}>
        <h2>Оставить отзыв</h2>
      </div>
      {isLogin ? (
        <div className={styles.login}>
          <form onSubmit={(e) => sendReview(e)}>
            <textarea
              className={styles.textInputLogin}
              placeholder="Отзыв*"
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
            <div className={styles.rating}>
              <p>Оценка</p>
              <RatingReview />
            </div>
            <input
              className={styles.submitInput}
              type="submit"
              value="Оставить отзыв"
            />
          </form>
        </div>
      ) : (
        <div className={styles.noLogin}>
          <h5>Заполните личные данные или предварительно авторизуйтесь</h5>
          <div className={styles.greenBtn}>
            <GreenButton text="Войти" link="/account" />
            <div className={styles.formData}>
              <form className={styles.form} onSubmit={goLogin}>
                <input
                  className={
                    emailError ? styles.authInputError : styles.authInput
                  }
                  type="text"
                  placeholder="Email*"
                  value={email}
                  onFocus={() => setEmailError("")}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {emailError ? <p className={styles.error}>{emailError}</p> : ""}
                <input
                  className={
                    passwordError ? styles.authInputError : styles.authInput
                  }
                  type="password"
                  placeholder="Пароль*"
                  value={password}
                  autoComplete="true"
                  onFocus={() => setPasswordError("")}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError ? (
                  <p className={styles.error}>{passwordError}</p>
                ) : (
                  ""
                )}
                <textarea
                  className={styles.textInput}
                  placeholder="Отзыв*"
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                />
                <div className={styles.rating}>
                  <p>Оценка</p>
                  <RatingReview />
                </div>
                <input
                  className={styles.submitInput}
                  type="submit"
                  value="Оставить отзыв"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalReview;
