"use client";
import React, { useState } from "react";

const LinkedinIcon = () => {
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
        d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0ZM8.645 17.02h-2.34V9.535h2.34ZM7.41 8.598h-.02c-.847 0-1.394-.575-1.394-1.301 0-.738.566-1.297 1.43-1.297.863 0 1.39.559 1.41 1.297.004.723-.543 1.3-1.426 1.3ZM18 17.02h-2.652v-3.872c0-1.011-.414-1.707-1.328-1.707-.7 0-1.086.47-1.266.918-.066.16-.055.387-.055.618v4.043H10.07s.032-6.864 0-7.485h2.63v1.176c.152-.516.991-1.246 2.331-1.246 1.664 0 2.969 1.078 2.969 3.394Zm0 0"
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

export default LinkedinIcon;
