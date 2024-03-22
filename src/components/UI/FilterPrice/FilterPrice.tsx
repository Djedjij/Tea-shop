import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./FilterPrice.module.scss";
import GreyButton from "../Buttons/GreyButton/GreyButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchFilteredTeas } from "../../../store/redusers/fetchTeas";
import { setFilteredBy } from "../../../store/redusers/teasSlice";

const FilterPrice = () => {
  const dispatch = useAppDispatch();
  const teas = useAppSelector((state) => state.teas.teas);
  const [slider1Value, setSlider1Value] = useState<number>(0);
  const [slider2Value, setSlider2Value] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const filterByPrice = () => {
    dispatch(
      fetchFilteredTeas({
        min_price: slider1Value.toString(),
        max_price: slider2Value.toString(),
      })
    );
    dispatch(setFilteredBy(`Цена: от ${slider1Value}р до ${slider2Value}р`));
  };

  useEffect(() => {
    if (teas && teas.length > 0) {
      setMinPrice(
        teas.reduce((acc, current) => {
          return acc.price < current.price ? acc : current;
        }, teas[0]).price
      );
      setMaxPrice(
        teas.reduce((acc, current) => {
          return acc.price > current.price ? acc : current;
        }, teas[0]).price
      );
      setSlider1Value(minPrice);
      setSlider2Value(maxPrice);
    }
  }, [teas, minPrice, maxPrice]);

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
          min={minPrice}
          max={maxPrice}
          step={1}
        />
        <input
          className={styles.slider2}
          onChange={handleSlider2}
          value={slider2Value}
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1}
        />
      </div>
      <div className={styles.price}>
        <h4>Цена:</h4>
        <p>
          {slider1Value}р - {slider2Value}р
        </p>
      </div>
      <div className={styles.button}>
        <GreyButton text="Отфильтровать" onClick={() => filterByPrice()} />
      </div>
    </div>
  );
};

export default FilterPrice;
