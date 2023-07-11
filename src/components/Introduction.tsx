import React from "react";
import Image from "next/image";
import Title from "./UI/Title";
import Button from "./UI/Button";
import styles from "../scss/Introduction.module.scss"

const Introduction = () => {
  return (
    <section className={`h-screen flex items-center ${styles.intro}`}>
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex items-center">
          <div className="flex-auto">
            <Title>Hello, I'm Michał</Title>
            <p className="text-xl mb-8 font-thin">
              Professional Frontend Developer from Poland.
            </p>
            <Button text="About me"/>
          </div>
          <div className="flex-auto">
            <Image
              className="mx-auto rounded-full shadow-image"
              src="/michal-wolny.jpg"
              alt="Michał Wolny"
              width="380"
              height="380"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
