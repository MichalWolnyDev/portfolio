"use client";
import React from "react";
import Title from "./UI/Title";
import Button from "./UI/Button";
import styles from "../scss/Introduction.module.scss";
import BlueLine from "./UI/BlueLine";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Introduction = () => {
  return (
    <section
      className={`md:h-screen h-full flex items-center ${styles.intro}`}
      id="home"
    >
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex md:flex-row flex-col md:gap-8 gap-16 items-center">
          <div className="flex-auto md:w-1/2 w-full">
            <img
              src="/michal-wolny.jpg"
              className={`${styles.intro__image} md:mx-auto rounded-full shadow-image`}
              alt="Michał Wolny"
            />
          </div>
          <div className="flex-auto md:w-1/2 w-full">
            <Title>Hello, I&apos;m Michał</Title>
            <BlueLine />
            <p className="md:text-xl text-base mb-8 font-thin">
              Professional Frontend Developer from Poland.
            </p>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <Button text="About me" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
