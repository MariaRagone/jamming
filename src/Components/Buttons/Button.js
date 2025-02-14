import React from "react";
import "./Buttons.css";
const Button = ({ name }) => {
  return (
    <div className="search-button">
      <button className="search-button">{name}</button>
    </div>
  );
};

export default Button;
