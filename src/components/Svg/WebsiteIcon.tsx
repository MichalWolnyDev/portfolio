"use client";
import React, { useState } from "react";

const WebsiteIcon = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <path
        d="M39.927 55.719A24.848 24.848 0 0 1 12 46.927a24.856 24.856 0 0 1-.188-29.27c6.292-8.772 17.532-12.47 27.803-9.167a24.884 24.884 0 0 1 17.25 23.656 37.332 37.332 0 0 1-.74 6"
        style={{
          fill: "none",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: isHover ? "#fff" : "#c5c6c7",
          transition: "all .3s ease-in-out",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        transform="scale(.375)"
      />
      <path
        d="M37.865 51.104A46.512 46.512 0 0 1 32 56.698M32 7a34.155 34.155 0 0 1 11.573 23c.146 1.615.177 3.23.083 4.854M32 7a34.059 34.059 0 0 0-11.688 25.458c0 16.198 7.282 21 11.657 24.24M10.375 19.896H53.75M32 6.99v49.708M11.052 45.48h25.99M7.135 32.458l49.73-.604M53.573 57 58 52.562l-8-8 4.552-2.916a.357.357 0 0 0 .177-.386.376.376 0 0 0-.302-.312l-15.292-3.573a.377.377 0 0 0-.354.104.428.428 0 0 0-.104.354L42 53.406a.376.376 0 0 0 .313.302.372.372 0 0 0 .395-.166L45.573 49Zm0 0"
        style={{
          fill: "none",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: isHover ? "#fff" : "#c5c6c7",
          transition: "all .3s ease-in-out",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        transform="scale(.375)"
      />
    </svg>
  );
};

export default WebsiteIcon;
