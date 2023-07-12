"use client";
import React, { useState } from "react";

const PhoneIcon = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="m10.04 5.316.648 1.164c.585 1.047.351 2.426-.575 3.348 0 0-1.117 1.117.91 3.149 2.028 2.027 3.149.91 3.149.91.922-.926 2.3-1.16 3.348-.575l1.164.649c1.586.887 1.773 3.11.378 4.5-.835.84-1.863 1.488-2.996 1.531-1.906.074-5.148-.41-8.398-3.66S3.934 9.84 4.008 7.934c.043-1.133.691-2.16 1.531-2.997 1.39-1.394 3.613-1.207 4.5.38Zm0 0"
        style={{
          stroke: "none",
          fill: isHover ? "#fff" : "#c5c6c7",
          transition: "all .3s ease-in-out",
          fillOpacity: 1,
        }}
      />
    </svg>
  );
};

export default PhoneIcon;
