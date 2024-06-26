import React, { useEffect, useState } from "react";
import {
  resetFilters,
  setCurrentPage,
} from "../../../../store/redusers/teasSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
import { CSSTransition } from "react-transition-group";
import { fetchTeas } from "../../../../store/redusers/fetchTeas";

import styles from "./TeaList.module.scss";
import { ITea } from "../../../../models/ITea";
import TeaListEmpty from "./TeaListEmpty";
import Loader from "../../../UI/Loaders/Loader";

interface TeaListProps {
  isVertical: boolean;
  renderTeaList: () => void;
}

const TeaList: React.FC<TeaListProps> = ({ isVertical, renderTeaList }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTeas());
  }, [dispatch]);

  const teas = useAppSelector((state) => state.teas.teas);
  const loading = useAppSelector((state) => state.teas.isLoading);
  const filteredTeas = useAppSelector((state) => state.teas.filteredTeas);
  const isFiltered = useAppSelector((state) => state.teas.isFiltered);
  const currentPage = useAppSelector((state) => state.teas.currentPage);
  const itemsPerPage = useAppSelector((state) => state.teas.itemsPerPage);
  const filteredBy = useAppSelector((state) => state.teas.filteredBy);
  const [transition, setTransition] = useState<boolean>(false);

  const handleTransition = () => {
    renderTeaList();
    if (transition) {
      setTransition(false);
    } else {
      setTransition(true);
    }
  };

  const resetFilter = () => {
    dispatch(resetFilters());
  };
  useEffect(() => {
    handleTransition();
    // eslint-disable-next-line
  }, [teas, filteredTeas, isFiltered]);

  const paginateButtons = () => {
    const countPages =
      filteredTeas && filteredTeas.length > 0
        ? Math.ceil(filteredTeas.length / itemsPerPage)
        : Math.ceil(teas.length / itemsPerPage);
    const buttonCount: number[] = [];

    for (let i = 0; i < countPages; i++) {
      buttonCount.push(i + 1);
    }

    return (
      buttonCount.length !== 1 && (
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
      )
    );
  };

  const renderTeasForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const teasForCurrentPage =
      filteredTeas && filteredTeas.length > 0
        ? filteredTeas.slice(startIndex, endIndex)
        : teas.slice(startIndex, endIndex);

    return (
      <div>
        {filteredBy && (
          <div className={styles.categoryTitle}>
            <p>{filteredBy}</p>
            <img
              onClick={() => resetFilter()}
              src="/images/icons/icon-crossWhite.svg"
              alt=""
            />
          </div>
        )}
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
          <div className={styles.loaderWrapper}>
            {loading && (
              <div className={styles.loader}>
                <Loader />
              </div>
            )}
            <div
              className={`${styles.wrapper} ${loading ? styles.loading : ""}`}
            >
              {filteredTeas.length === 0 && isFiltered ? (
                <TeaListEmpty />
              ) : (
                teasForCurrentPage.map((tea: ITea) => (
                  <div key={tea.name} className={styles.teaCard}>
                    {isVertical ? (
                      <VerticalTeaCard weight={100} tea={tea} />
                    ) : (
                      <HorizontalTeaCard weight={100} tea={tea} />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  };
  return filteredTeas.length === 0 && isFiltered ? (
    <TeaListEmpty />
  ) : (
    <div>
      {renderTeasForCurrentPage()}
      {
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
            disabled={
              teas.length - currentPage * itemsPerPage <= 0 ||
              filteredTeas.length - currentPage * itemsPerPage <= 0
            }
            className={
              teas.length - currentPage * itemsPerPage <= 0 ||
              filteredTeas.length - currentPage * itemsPerPage <= 0
                ? styles.notActiveButton
                : styles.paginateArrowButtonRight
            }
            onClick={() => {
              dispatch(setCurrentPage(currentPage + 1));
              handleTransition();
            }}
          ></button>
        </div>
      }
    </div>
  );
};

export default TeaList;
