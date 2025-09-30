import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  linkTo: string;
  btnDescription: string;
};

const Button: React.FC<ButtonProps> = ({ linkTo, btnDescription }) => {
  return (
    <Link to={linkTo} className="main-btn bg-white text-black">
      {btnDescription}
    </Link>
  );
};

export default Button;
