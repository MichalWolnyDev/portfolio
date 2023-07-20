import React from "react";

interface Props {
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="w-44 border-2 border-ui-aqua p-4 hover:bg-ui-aqua transition duration-300 ease-in-out text-white">
      {text}
    </button>
  );
};

export default Button;
