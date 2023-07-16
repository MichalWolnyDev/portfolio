import React from "react";
import Image from "next/image";
import Title from "./UI/Title";
import TechIcon from "./UI/TechIcon";

import reactIcon from "../icons/react.png";
import vueIcon from "../icons/vue.png";
import tsIcon from "../icons/ts.png";
import sassIcon from "../icons/sass.png";
import jsIcon from "../icons/js.png";

import styles from "../scss/Overview.module.scss";
import BlueLine from "./UI/BlueLine";

const Overview = () => {
  return (
    <section className="h-full flex items-center bg-ui-black relative md:py-36 py-4" id="about">
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex md:flex-row flex-col items-center gap-16">
          <div className="flex-auto md:w-1/2 w-full">
            <Title>About me</Title>
            <BlueLine />
            <p className="md:text-xl text-base mb-8 font-thin text-justify">
              I am a frontend developer with over four years of experience. So
              far, I have mainly worked with Vue.js, but I am also ready to work
              on projects using the React.js + Typescript stack. I am open to
              new experiences and I want to continue growing in my profession.
            </p>
          </div>
          <div className="flex-auto md:w-1/2 w-full relative md:block flex justify-center gap-6 flex-wrap">
            <div className={styles.overview__icon}>
              <TechIcon icon={reactIcon.src} alt="React" />
            </div>
            <div className={styles.overview__icon}>
              <TechIcon icon={vueIcon.src} alt="Vue" />
            </div>
            <div className={styles.overview__icon}>
              <TechIcon icon={tsIcon.src} alt="Typescript" />
            </div>
            <div className={styles.overview__icon}>
              <TechIcon icon={sassIcon.src} alt="Sass" />
            </div>
            <div className={styles.overview__icon}>
              <TechIcon icon={jsIcon.src} alt="Javascript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
