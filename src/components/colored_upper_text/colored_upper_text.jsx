import PropTypes from "prop-types";
import "./colored_upper_text.css";

const ColoredUpper = ({ text, color }) => {
  return <p style={{ color: color, textTransform: "uppercase" }}>{text}</p>;
};

export default ColoredUpper;
