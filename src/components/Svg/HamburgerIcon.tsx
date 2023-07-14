'use client';
import React from 'react'

const HamburgerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
    <path
      d="M20.001 6.999H4M20.001 12H4M20.001 17.001H4"
      style={{
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        stroke: "#c5c6c7",
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      transform="scale(1.08333)"
    />
  </svg>
  )
}

export default HamburgerIcon