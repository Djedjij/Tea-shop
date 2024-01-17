import React, { useState } from "react";
import styles from "./GridButton.module.scss";
interface GreenButtonsProps {
  onVerticalClick: () => void;
  onHorizontalClick: () => void;
}

const GridButtons: React.FC<GreenButtonsProps> = (props) => {
  const [isRowActive, setIsRowActive] = useState<boolean>(false);
  const [isColumnActive, setIsColumnActive] = useState<boolean>(true);

  const handleRow = () => {
    props.onHorizontalClick();
    setIsRowActive(true);
    setIsColumnActive(false);
  };
  const handleColumn = () => {
    props.onVerticalClick();
    setIsColumnActive(true);
    setIsRowActive(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridButtonColumn} onClick={handleColumn}>
        <img
          src={
            isColumnActive
              ? "/images/icons/icon-greenColumn.png"
              : "/images/icons/icon-greyColumn.png"
          }
          alt="grid"
        />
      </div>
      <div className={styles.gridButtonRow} onClick={handleRow}>
        <img
          src={
            isRowActive
              ? "/images/icons/icon-greenRow.png"
              : "/images/icons/icon-greyRow.png"
          }
          alt="grid"
        />
      </div>
    </div>
  );
};

export default GridButtons;
