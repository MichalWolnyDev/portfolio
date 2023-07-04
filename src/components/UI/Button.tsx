import React from "react";

interface Props {
    text: string
}

const Button: React.FC<Props> = ({text}) => {
  return (
    <button className="w-44 border-2 border-ui-aqua p-4 hover:bg-ui-aqua transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
