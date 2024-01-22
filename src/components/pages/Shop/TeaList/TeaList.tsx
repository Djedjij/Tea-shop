import React, { useEffect, useState } from "react";
import { setCurrentPage } from "../../../../store/redusers/teasSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
import { CSSTransition } from "react-transition-group";
import styles from "./TeaList.module.scss";
import { fetchTeas } from "../../../../store/redusers/fetchTeas";
interface TeaListProps {
  isVertical: boolean;
  renderTeaList: () => void;
}

const TeaList: React.FC<TeaListProps> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTeas(0, 100));
  }, [dispatch]);

  const teas = useAppSelector((state) => state.teas.teas);
  const currentPage = useAppSelector((state) => state.teas.currentPage);
  const itemsPerPage = useAppSelector((state) => state.teas.itemsPerPage);

  const [transition, setTransition] = useState<boolean>(false);
  const handleTransition = () => {
    props.renderTeaList();
    if (transition) {
      setTransition(false);
    } else {
      setTransition(true);
    }
  };

  const paginateButtons = () => {
    const countPages = Math.ceil(teas.length / itemsPerPage);
    const buttonCount: number[] = [];

    for (let i = 0; i < countPages; i++) {
      buttonCount.push(i + 1);
    }

    return (
      <div>
        {buttonCount.map((buttonNum: number, index: number) => (
          <button
            className={
              buttonNum === currentPage
                ? styles.paginateActiveButton
                : styles.paginateButton
            }
            disabled={buttonNum === currentPage}
            key={index}
            onClick={() => {
              dispatch(setCurrentPage(buttonNum));
              handleTransition();
            }}
          >
            {buttonNum}
          </button>
        ))}
      </div>
    );
  };

  const renderTeasForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const teasForCurrentPage = teas.slice(startIndex, endIndex);

    return (
      <div>
        <CSSTransition
          in={transition}
          timeout={300}
          classNames={{
            enter: styles.teasEnter,
            enterActive: styles.teasEnterActive,
            exit: styles.teasExit,
            exitActive: styles.teasExitActive,
          }}
        >
          <div className={styles.wrapper}>
            {teasForCurrentPage.map((tea) => (
              <div key={tea.name} className={styles.teaCard}>
                {props.isVertical ? (
                  <VerticalTeaCard
                    name={tea.name}
                    price={tea.price}
                    img={tea.imagesLinks[0]}
                  />
                ) : (
                  <HorizontalTeaCard
                    name={tea.name}
                    price={tea.price}
                    img={tea.imagesLinks[0]}
                    desc={tea.description}
                  />
                )}
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    );
  };

  return (
    <div>
      {renderTeasForCurrentPage()}
      <div className={styles.paginate}>
        <button
          className={
            currentPage === 1
              ? styles.notActiveButton
              : styles.paginateArrowButtonLeft
          }
          onClick={() => {
            dispatch(setCurrentPage(currentPage - 1));
            handleTransition();
          }}
        ></button>
        {paginateButtons()}
        <button
          disabled={teas.length - currentPage * itemsPerPage <= 0}
          className={
            teas.length - currentPage * itemsPerPage <= 0
              ? styles.notActiveButton
              : styles.paginateArrowButtonRight
          }
          onClick={() => {
            dispatch(setCurrentPage(currentPage + 1));
            handleTransition();
          }}
        ></button>
      </div>
    </div>
  );
};

export default TeaList;