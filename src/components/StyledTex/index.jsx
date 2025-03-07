import PropTypes from "prop-types";
import "../StyledTex/";

const ColoredUpper = ({ text, color }) => (
  <p style={{ color: color, textTransform: "uppercase" }}>{text}</p>
);

export default ColoredUpper;
