import React from "react";

type ButtonProps = {
  className: string;
  title: string;
  clickHandler: () => void;
};

const Button = ({ className, title, clickHandler }: ButtonProps) => {
  return (
    <div >
      <button className={className} onClick={() => clickHandler()}>
        {title}
      </button>
    </div>
  );
};

export default Button;
