import React from "react";
import styles from "./DropDown.module.scss";
import { Iphones } from "../../../utils/consts";
import { Link } from "react-router-dom";

interface IDropdownProps {
  isActiveDropdown: boolean;
  content: Iphones[];
}

const DropDown: React.FC<IDropdownProps> = ({ isActiveDropdown, content }) => {
  return (
    <div className={styles.wrapper}>
      <nav
        className={
          isActiveDropdown ? `${styles.active} ${styles.menu}` : styles.menu
        }
      >
        <ul className={styles.menuList}>
          {content.map((el) => (
            <li key={el.text} className={styles.menuItem}>
              {el.icon && <img src={el.icon} alt="" />}
              {el.link ? (
                <Link className={styles.menuItemLink} to={el.link}>
                  {el.text}
                </Link>
              ) : (
                <p>{el.text}</p>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DropDown;
