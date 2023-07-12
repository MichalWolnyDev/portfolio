import React from "react";
import GithubIcon from "./Svg/GithubIcon";
import LinkedinIcon from "./Svg/LinkedinIcon";
import EmailIcon from "./Svg/EmailIcon";
import PhoneIcon from "./Svg/PhoneIcon";

const Footer = () => {
  return (
    <footer className="bg-ui-darkgray relative z-50">
      <div className="container mx-auto px-8 xl:px-32 md:px-20 py-8">
        <div className="flex justify-between items-center">
          <p className="text-txt-gray">&copy; Michał Wolny, 2023</p>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/MichalWolnyDev" target="_blank">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/micha%C5%82-wolny-255a00168/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a href="">
              <EmailIcon />
            </a>
            <a href="">
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
