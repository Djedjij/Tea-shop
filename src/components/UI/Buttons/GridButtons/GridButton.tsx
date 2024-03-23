import React, { useState } from "react";
import styles from "./GridButton.module.scss";
interface GreenButtonsProps {
  onVerticalClick: () => void;
  onHorizontalClick: () => void;
}

const GridButtons: React.FC<GreenButtonsProps> = ({
  onVerticalClick,
  onHorizontalClick,
}) => {
  const [isRowActive, setIsRowActive] = useState<boolean>(false);
  const [isColumnActive, setIsColumnActive] = useState<boolean>(true);

  const handleRow = () => {
    onHorizontalClick();
    setIsRowActive(true);
    setIsColumnActive(false);
  };
  const handleColumn = () => {
    onVerticalClick();
    setIsColumnActive(true);
    setIsRowActive(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridButtonColumn} onClick={handleColumn}>
        <img
          src={
            isColumnActive
              ? "/images/icons/icon-greenColumn.svg"
              : "/images/icons/icon-greyColumn.svg"
          }
          alt="grid"
        />
      </div>
      <div className={styles.gridButtonRow} onClick={handleRow}>
        <img
          src={
            isRowActive
              ? "/images/icons/icon-greenRow.svg"
              : "/images/icons/icon-greyRow.svg"
          }
          alt="grid"
        />
      </div>
    </div>
  );
};

export default GridButtons;
