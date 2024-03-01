import React, { useState } from "react";
import styles from "./TeaPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { teaAPI } from "../../../services/teaService";
import GreyButton from "../../UI/Buttons/GreyButton/GreyButton";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import { useAppSelector } from "../../../hooks/hooks";
import VerticalTeaCard from "../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import Carousel from "../../UI/Slider/Carousel";
import Rating from "../../UI/Rating/Rating";
import { ITea } from "../../../models/ITea";

const useSimilarTeas = (teas: ITea[]) => {
  const [similarTeas, setSimilarTeas] = useState<ITea[]>([]);
  if (similarTeas.length < 4) {
    for (let i = 0; i < 4; i++) {
      if (!similarTeas[i]) {
        setSimilarTeas((prev) => [
          ...prev,
          teas[Math.floor(Math.random() * 10)],
        ]);
      }
    }
  }

  return similarTeas;
};

const TeaPage = () => {
  const { teaId } = useParams();
  const teas = useAppSelector((state) => state.teas.teas);

  const similarTeas = useSimilarTeas(teas);

  const { data: tea } = teaAPI.useFetchTeaQuery(String(teaId));

  console.log(similarTeas);

  if (tea) {
    return (
      <div>
        <LocatePanel />
        <div className={styles.wrapper}>
          <div className={styles.teaWrapper}>
            <Carousel
              images={tea.imagesLinks}
              pageWidth={200}
              pageHeight={200}
            />
            <div className={styles.description}>
              <h3>{tea.name}</h3>
              <h5>
                Категория: <Link to=""> {tea.category}</Link>
              </h5>
              <p>Цена за 100г - {tea.price}р.</p>
              <p>{tea.effect}</p>
              <div className={styles.shopButton}>
                <GreyButton text="В корзину" />
                <Rating />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.aboutButtonActive}>Описание</button>
            <button className={styles.aboutButton}>Отзывы</button>
          </div>
          <div className={styles.descriptionBlock}>
            <h3>Описание</h3>
            <p>{tea.description}</p>
          </div>
          <div className={styles.similar}>
            <h2>Попробуйте также</h2>
            <div className={styles.similarTeas}>
              {similarTeas.map((el) => (
                <VerticalTeaCard
                  id={el.productId}
                  name={el.name}
                  img={el.imagesLinks[0]}
                  price={el.price}
                  weight={100}
                  key={el.productId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Такого товара не существует</div>;
  }
};

export default TeaPage;
