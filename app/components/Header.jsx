"use client";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Header.module.css";

const Header = () => {
  const [index, setIndex] = useState(0);
  const texts = ["Branding", "Experience", "Products"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative items-center flex flex-col  my-14 ">
      <p className="font-merriweather font-[500] text-[.8rem]">
        We make digital (and magical)…
      </p>
      <div  className={styles.textWrapper}>
        <TransitionGroup>
          <CSSTransition
            key={texts[index]}
            timeout={500}
            classNames={{
              enter: styles.textEnter,
              enterActive: styles.textEnterActive,
              exit: styles.textExit,
              exitActive: styles.textExitActive,
            }}
          >
            <h4 className="font-merriweather absolute inset-0 py-8 text-center font-[500] text-[4rem]">
              {texts[index]}
            </h4>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Header;
