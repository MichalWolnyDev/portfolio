'use client';
import React from "react";
import styles from "../scss/MobileMenu.module.scss";
import { useScrollTo } from '@/hooks/use-scroll';
import CloseIcon from "./Svg/CloseIcon";
import { useGlobalContext } from '@/app/context/store';

const MobileMenu = () => {

    const {setShowMenu} = useGlobalContext();

    const showMenuHandler = () => {
        setShowMenu(false)
    }

  return (
    <div className={`bg-ui-darkgray ${styles.menu}`}>
      <div className={styles.menu__content}>
        <div className={styles.menu__close} onClick={showMenuHandler}>
           <CloseIcon/>
        </div>
        <ul className={`text-txt-gray ${styles.menu__list}`}>
          <li className={styles.nav__link} onClick={() => {useScrollTo("home"); showMenuHandler()}}>
            Home
          </li>
          <li className={styles.nav__link} onClick={() => {useScrollTo("about"); showMenuHandler()}}>
            About
          </li>
          <li className={styles.nav__link} onClick={() => {useScrollTo("exp"); showMenuHandler()}}>
            Work experience
          </li>
          <li
            className={styles.nav__link}
            onClick={() => {useScrollTo("projects"); showMenuHandler()}}
          >
            Personal projects
          </li>
          <li
            className={styles.nav__link}
            onClick={() => {useScrollTo("contact"); showMenuHandler()}}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
