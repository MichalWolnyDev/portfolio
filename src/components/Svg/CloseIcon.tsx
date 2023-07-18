import React from 'react'

const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
    <path
      d="M3 21.322 21 3.32M3 3.32l18 18.002"
      style={{
        fill: "none",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "#c5c6c7",
        strokeOpacity: 1,
        strokeMiterlimit: 4,
      }}
      transform="translate(.48) scale(.96)"
    />
  </svg>
  )
}

export default CloseIcon