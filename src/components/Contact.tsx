import React from "react";
import Title from "./UI/Title";
import EmailIcon from "./Svg/EmailIcon";
import PhoneIcon from "./Svg/PhoneIcon";
import BlueLine from "./UI/BlueLine";

export const Contact = () => {
  return (
    <section
      className="md:h-screen h-full flex items-center bg-black relative"
      id="contact"
    >
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-12">
        <div className="flex items-center max-w-3xl">
          <div className="flex-auto md:w-1/2 w-full">
            <Title>Contact</Title>
            <BlueLine />
            <p className="md:text-xl text-base mb-8 font-thin text-justify">
              Thank you for visiting my portfolio. If you have any questions or
              would like to collaborate with me, please contact me. I will
              respond as soon as possible.
            </p>
            <a href="mailto:mwolny.business@gmail.com">
              <div className="flex gap-4">
                <EmailIcon />
                <span className="text-txt-gray">
                mwolny.business@gmail.com
                </span>
              </div>
            </a>
            {/* <br />
            <a href="tel:+48 798 157 003">
              <div className="flex gap-4">
                <PhoneIcon />
                <span className="text-txt-gray">
                +48 798 157 003
                </span>
              </div>
            </a> */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
