import React, { useEffect, useState } from "react";
import styles from "./ButtonUp.module.scss";

const ButtonUp = () => {
  const [isDrop, setIsDrop] = useState("-100px");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsDrop(window.scrollY > 0 ? "0px" : "-100px");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      onClick={scrollToTop}
      style={{ bottom: isDrop }}
      className={styles.buttonUp}
    >
      <img src="/images/icons/arrowUp.png" alt="arrow" />
    </div>
  );
};

export default ButtonUp;
