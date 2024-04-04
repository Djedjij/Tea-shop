import React, { useEffect, useState } from "react";
import styles from "./TeaPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { teaAPI } from "../../../services/teaService";
import GreyButton from "../../UI/Buttons/GreyButton/GreyButton";
import LocatePanel from "../../UI/LocatePahel/LocatePanel";
import Carousel from "../../UI/Slider/Carousel";
import Rating from "../../UI/Rating/Rating";
import Reviews from "../../UI/Reviews/Reviews";
import { CSSTransition } from "react-transition-group";
import Modal from "../../UI/Modal/Modal";
import { shopCartAPI } from "../../../services/shopCartService";
import GreyButtonDisabled from "../../UI/Buttons/GreyButton/GreyButtonDisabled";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import VerticalTeaCard from "../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import { fetchFilteredByCategoryTeas } from "../../../store/redusers/fetchTeas";
import { setViewedTeas } from "../../../store/redusers/teasSlice";
import { reviewAPI } from "../../../services/reviewServise";

const TeaPage = () => {
  const dispatch = useAppDispatch();
  const { teaId } = useParams();
  const { data: tea } = teaAPI.useFetchTeaQuery(String(teaId));
  const [postTea] = shopCartAPI.usePostTeaMutation();
  const { data: shopCart } = shopCartAPI.useFetchShopCartQuery();
  const [isDescription, setIsDercription] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [inShopCart, setInShopCart] = useState(false);
  const teas = useAppSelector((state) => state.teas.teas);
  const similarTeas = teas.slice(0, 4);
  const { data: reviews } = reviewAPI.useFetchReviewsQuery(Number(teaId));

  const handleSliderClick = () => {
    setActiveModal(true);
  };

  useEffect(() => {
    setInShopCart(
      shopCart?.itemsMap.find(
        (shopCartTea) => shopCartTea.id === tea?.productId
      )
        ? true
        : false
    );
  }, [shopCart?.itemsMap, tea?.productId]);

  useEffect(() => {
    if (tea) dispatch(setViewedTeas(tea));
  });

  const filterTeas = (name: string) => {
    dispatch(fetchFilteredByCategoryTeas({ title: name }));
  };
  const addInShopCard = async (id: number, weight: number) => {
    postTea({ weight, id });
  };
  console.log(reviews);

  if (tea && reviews) {
    return (
      <div>
        <LocatePanel childLocate={tea.name} />
        <div className={styles.wrapper}>
          <div className={styles.teaWrapper}>
            <Carousel
              images={tea.imagesLinks}
              pageWidth={200}
              pageHeight={200}
              onClick={handleSliderClick}
            />
            <div className={styles.description}>
              <h3>{tea.name}</h3>
              <h5>
                Категория:
                <Link to="/shop" onClick={() => filterTeas(tea.category)}>
                  {tea.category}
                </Link>
              </h5>
              <div className={styles.price}>
                <p>Цена за 100г - </p>
                <p className={styles.priceNum}>{tea.price}р</p>
              </div>
              <p>{tea.effect}</p>
              <div className={styles.shopButton}>
                {inShopCart ? (
                  <GreyButtonDisabled text="В корзине" />
                ) : (
                  <GreyButton
                    text="В корзину"
                    onClick={() => addInShopCard(tea.productId, 100)}
                  />
                )}
                <Rating />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              className={
                isDescription ? styles.aboutButtonActive : styles.aboutButton
              }
              onClick={() => setIsDercription(true)}
            >
              Описание
            </button>
            <button
              className={
                isDescription ? styles.aboutButton : styles.aboutButtonActive
              }
              onClick={() => setIsDercription(false)}
            >
              Отзывы ({Number(reviews.length)})
            </button>
          </div>
          <div>
            <CSSTransition
              in={isDescription}
              timeout={300}
              classNames={{
                enter: styles.descriptionEnter,
                enterActive: styles.descriptionEnterActive,
                exit: styles.descriptionExit,
                exitActive: styles.descriptionExitActive,
              }}
            >
              {isDescription ? (
                <div className={styles.descriptionBlock}>
                  <h3>Описание</h3>
                  {tea.description.split("\n").map((el, index) => (
                    <p key={index}>{el}</p>
                  ))}
                </div>
              ) : (
                <Reviews reviews={reviews} productId={tea?.productId} />
              )}
            </CSSTransition>
          </div>
          <div className={styles.similar}>
            <h2>Попробуйте также</h2>
            <div className={styles.similarTeas}>
              {similarTeas.map((tea, index) => (
                <VerticalTeaCard tea={tea} weight={100} key={index} />
              ))}
            </div>
          </div>
        </div>
        <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
          <Carousel images={tea.imagesLinks} pageWidth={500} pageHeight={500} />
        </Modal>
      </div>
    );
  } else {
    return <div>Такого товара не существует</div>;
  }
};

export default TeaPage;
