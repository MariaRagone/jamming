import "./Buttons.css";
import propTypes from "../propTypes";

const Button = ({ type, name, onClick }) => {
  return (
    <div>
      <button className="button" type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

Button.propTypes = propTypes.button;
export default Button;
