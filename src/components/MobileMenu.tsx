"use client";
import React from "react";
import styles from "../scss/MobileMenu.module.scss";
import CloseIcon from "./Svg/CloseIcon";
import { useGlobalContext } from "@/app/context/store";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const MobileMenu = () => {
  const { setShowMenu } = useGlobalContext();

  const showMenuHandler = () => {
    setShowMenu(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`bg-ui-darkgray ${styles.menu}`}>
      <div className={styles.menu__content}>
        <div className={styles.menu__close} onClick={showMenuHandler}>
          <CloseIcon />
        </div>
        <ul className={`text-txt-gray ${styles.menu__list}`}>
          <a onClick={scrollToTop}>
            <li className={styles.nav__link} onClick={showMenuHandler}>
              Home
            </li>
          </a>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li className={styles.nav__link} onClick={showMenuHandler}>
              About
            </li>
          </Link>
          <Link to="exp" spy={true} smooth={true} duration={500}>
            <li className={styles.nav__link} onClick={showMenuHandler}>
              Work experience
            </li>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <li className={styles.nav__link} onClick={showMenuHandler}>
              Personal projects
            </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li className={styles.nav__link} onClick={showMenuHandler}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
