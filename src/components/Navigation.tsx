"use client";
import React from "react";
import styles from "../scss/Navigation.module.scss";
// import useScrollToElement from "@/hooks/use-scroll";
import HamburgerIcon from "./Svg/HamburgerIcon";
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import MobileMenu from "./MobileMenu";
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

const Navigation = () => {
  const { showMenu, setShowMenu } = useGlobalContext();

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-ui-darkgray relative z-50 sticky top-0">
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-6">
        <div className="flex justify-between">
          <p className={styles.nav__logo}>Michał Wolny</p>
          <div className={styles.nav__menu}>
            <ul className="flex gap-6 text-txt-gray">
              <a onClick={scrollToTop}>
                <li className={styles.nav__link}>Home</li>
              </a>
              <Link to="about" spy={true} smooth={true} duration={500}>
                <li className={styles.nav__link}>About</li>
              </Link>
              <Link to="exp" spy={true} smooth={true} duration={500}>
                <li className={styles.nav__link}>Work experience</li>
              </Link>
              <Link to="projects" spy={true} smooth={true} duration={500}>
                <li className={styles.nav__link}>Personal projects</li>
              </Link>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <li className={styles.nav__link}>Contact</li>
              </Link>
            </ul>
          </div>
          <div className={styles["nav__menu-mobile"]} onClick={showMenuHandler}>
            <HamburgerIcon />
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </nav>
  );
};

export default Navigation;
