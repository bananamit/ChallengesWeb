import PropTypes from "prop-types";
import "./GenericInput.css";

const GenericInput = ({ label, type, id }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input className="input__input" type={type} id={id} />
    </div>
  );
};

GenericInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default GenericInput;