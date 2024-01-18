import React from "react";
import { setCurrentPage } from "../../../../store/teasSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import VerticalTeaCard from "../../../UI/TeaCards/VerticalTeaCard/VerticalTeaCard";
import HorizontalTeaCard from "../../../UI/TeaCards/HorizontalTeaCard/HorizontalTeaCard";
import styles from "./TeaList.module.scss";
interface TeaListProps {
  isVertical: boolean;
}

const TeaList: React.FC<TeaListProps> = (props) => {
  const teas = useAppSelector((state) => state.teas.teas);
  const currentPage = useAppSelector((state) => state.teas.currentPage);
  const itemsPerPage = useAppSelector((state) => state.teas.itemsPerPage);
  const dispatch = useAppDispatch();

  const renderTeasForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const teasForCurrentPage = teas.slice(startIndex, endIndex);
    const countPages = Math.ceil(teas.length / itemsPerPage);
    const buttonCount: any = [];
    for (let i = 0; i < countPages; i++) {
      buttonCount.push(i + 1);
    }
    return (
      <div>
        {teasForCurrentPage.map((tea) => (
          <div key={tea.name} className={styles.teaCard}>
            {props.isVertical ? (
              <VerticalTeaCard
                name={tea.name}
                price={tea.price}
                img={tea.img}
              />
            ) : (
              <HorizontalTeaCard
                name={tea.name}
                price={tea.price}
                img={tea.img}
                desc={tea.desc}
              />
            )}
          </div>
        ))}
        <div>
          {buttonCount.map((buttonNum: number) => (
            <button onClick={() => dispatch(setCurrentPage(buttonNum))}>
              {buttonNum}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.wrapper}>{renderTeasForCurrentPage()}</div>
      <div className={styles.paginate}>
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        >
          Previous
        </button>
        <button
          disabled={teas.length - currentPage * itemsPerPage <= 0}
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeaList;
