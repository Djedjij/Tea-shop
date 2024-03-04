import React, { useEffect, useState } from "react";
import styles from "./BlackHeader.module.scss";
import { Link } from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import DropDown from "../../UI/DropdownList/DropDown";
import { cities, phones } from "../../../utils/consts";
import { CSSTransition } from "react-transition-group";
interface ICityProps {
  setCity: (city: string) => void;
  setActiveModal: (activeModal: boolean) => void;
}

const Cities: React.FC<ICityProps> = ({ setCity, setActiveModal }) => {
  const [cityList, setSityList] = useState(cities);
  const [searchCity, setSeacrchCity] = useState("");
  const filterCities = (searchText: string, listOfCities: string[]) => {
    if (!searchText) {
      return listOfCities;
    }
    return listOfCities.filter((city) =>
      city.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCities = filterCities(searchCity, cities);
      setSityList(filteredCities);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchCity, cityList]);

  return (
    <div className={styles.citiesWrapper}>
      <h3>Населенный пункт</h3>
      <div className={styles.inputAndbutton}>
        <input
          className={styles.cityInput}
          type="text"
          value={searchCity}
          onChange={(e) => setSeacrchCity(e.target.value)}
          placeholder="Введите название города или поселка"
        />
        <img
          className={styles.clearInput}
          src="/images/icons/icon-cross-png.png"
          alt=""
          onClick={() => setSeacrchCity("")}
        ></img>
      </div>
      <div className={styles.citiesinfo}>
        <p>
          Вам будут показаны условия доставки для выбранного населенного пункта,
          а также наличие в магазинах ближайшего к нему города. Если населенный
          пункт не найден, то доставка в него временно недоступна.
        </p>
      </div>
      <CSSTransition
        in={cityList.length !== cities.length}
        timeout={300}
        classNames={{
          enter: styles.citiesEnter,
          enterActive: styles.citiesEnterActive,
          exit: styles.citiesExit,
          exitActive: styles.citiesExitActive,
        }}
      >
        <div className={styles.cities}>
          {cityList.length ? (
            cityList.map((city, index) => (
              <p
                onClick={() => {
                  setCity(city);
                  setActiveModal(false);
                }}
                key={index}
              >
                {city}
              </p>
            ))
          ) : (
            <p className={styles.citiesEmpty}>
              По вашему запросу ничего не найдено
            </p>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

const BlackHeader = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activePhone, setActivePhone] = useState(false);
  const [city, setCity] = useState("Жодино");
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.location} onClick={() => setActiveModal(true)}>
          <img src="/images/icons/iconLocationWhite.png" alt="" />

          <p>{city}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoLinks}>
            <Link to={""}>Помощь</Link>
            <Link to={""}>Оплата и доставка</Link>
            <Link to={""}>Что с моим заказом?</Link>
          </div>
          <div
            onMouseEnter={() => setActivePhone(true)}
            onMouseLeave={() => setActivePhone(false)}
            className={styles.phoneWrapper}
          >
            <div className={styles.phone}>
              <img src="/images/icons/iconPhoneWhite.png" alt="" />
              <p>375-33-334-75-71</p>
              <img
                className={`${styles.arrowImg} ${activePhone && styles.active}`}
                src="/images/icons/iconArrowDown.svg"
                alt=""
              />
            </div>
            <DropDown content={phones} isActiveDropdown={activePhone} />
          </div>
          <div className={styles.time}>
            <img src="/images/icons/iconClockWhite.png" alt="" />
            <p>
              контакт-центр
              <br />c 8.00 до 22.00
            </p>
          </div>
        </div>
      </div>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <Cities setCity={setCity} setActiveModal={setActiveModal} />
      </Modal>
    </div>
  );
};

export default BlackHeader;
