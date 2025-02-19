import React from "react";
import "./Buttons.css";
const Button = ({ type, name, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
