'use client';
import React, { useState } from "react";

const EmailIcon = () => {
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
        d="M12 17.969 0 7.379V21h24V7.379Zm0-3.196L0 4.176V3h24v1.176Zm0 0"
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

export default EmailIcon;
