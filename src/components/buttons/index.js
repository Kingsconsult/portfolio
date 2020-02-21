import styled from "styled-components";
import PropTypes from "prop-types";
import buttonPadding from "./mixins"
import {color, bgColor} from "../colors"

const Button = styled.button`
  ${color};
  ${bgColor};
  font-weight: bold;
  margin: 0.5em 1em;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: ${buttonPadding};
`;

Button.propTypes = {
  variant: PropTypes.oneOf(["small", "big", "xlarge"])
};

Button.defaultProps = {
  size: "small"
};

export default Button;
