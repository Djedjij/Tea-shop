import React, { ChangeEvent, useState } from "react";
import styles from "./FilterPrice.module.scss";
import GreyButton from "../Buttons/GreyButton/GreyButton";

const FilterPrice = () => {
  const [slider1Value, setSlider1Value] = useState<number>(7);
  const [slider2Value, setSlider2Value] = useState<number>(25);

  let minGap: number = 1;

  const handleSlider1 = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue >= slider2Value - minGap) {
      setSlider1Value(slider2Value - minGap);
    } else {
      setSlider1Value(newValue);
    }
  };

  const handleSlider2 = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue <= slider1Value + minGap) {
      setSlider2Value(slider1Value + minGap);
    } else {
      setSlider2Value(newValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Фильтр по цене</h3>
      <div className={styles.container}>
        <div className={styles.sliderTrack}> </div>
        <input
          className={styles.slider1}
          onChange={handleSlider1}
          value={slider1Value}
          type="range"
          min={7}
          max={25}
          step={1}
        />
        <input
          className={styles.slider2}
          onChange={handleSlider2}
          value={slider2Value}
          type="range"
          min={7}
          max={25}
          step={1}
        />
      </div>
      <div className={styles.price}>
        {" "}
        <h4>Цена:</h4>{" "}
        <p>
          {slider1Value}р - {slider2Value}р
        </p>
      </div>
      <div className={styles.button}>
        <GreyButton text="Отфильтровать" />
      </div>
    </div>
  );
};

export default FilterPrice;
