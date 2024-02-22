import React from "react";

type ButtonProps = {
  className: string;
  title: string;
  onClick?: () => void;
};

const Button = ({ className, title, onClick }: ButtonProps) => {
  return (
    <div >
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
