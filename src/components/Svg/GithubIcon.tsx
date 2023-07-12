"use client";
import React, { useState } from "react";

const GithubIcon = () => {
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
        d="M12 0c6.629 0 12 5.508 12 12.305 0 5.433-3.434 10.043-8.2 11.672-.609.12-.823-.262-.823-.59 0-.407.015-1.73.015-3.375 0-1.149-.387-1.899-.816-2.282 2.672-.304 5.48-1.343 5.48-6.07 0-1.344-.465-2.437-1.234-3.3.121-.313.535-1.563-.121-3.258 0 0-1.004-.329-3.293 1.261-.961-.273-1.988-.41-3.008-.414-1.02.004-2.047.14-3.004.414-2.293-1.59-3.3-1.261-3.3-1.261-.653 1.695-.239 2.945-.118 3.257-.766.864-1.234 1.957-1.234 3.301 0 4.715 2.8 5.77 5.465 6.082-.34.309-.653.848-.762 1.645-.684.316-2.422.86-3.492-1.024 0 0-.633-1.18-1.84-1.265 0 0-1.168-.016-.078.746 0 0 .785.379 1.332 1.8 0 0 .703 2.196 4.039 1.454.008 1.027.02 1.996.02 2.289 0 .324-.223.707-.821.59C3.437 22.352 0 17.738 0 12.305 0 5.508 5.375 0 12 0"
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

export default GithubIcon;
