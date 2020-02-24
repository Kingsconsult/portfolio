import styled from "styled-components";
import PropTypes from "prop-types";
import { circleHeight, cirlcesWidth, border, hover, hoverBorder, hoverColor } from "./mixins"
import { color, bgColor } from "../colors"


const Circles = styled.div`
  border-radius: 50%;
  display: inline-block;
  font-family: Arial, sans-serif;
  ${border};
  ${color};
  ${bgColor};
  ${cirlcesWidth};
  ${circleHeight};
  ${hover};
  ${hoverBorder}
  ${hoverColor}

`;

Circles.propTypes = {
  variant: PropTypes.oneOf(["small", "medium", "large"])
};

Circles.defaultProps = {
  size: "small",
  color: "white",
  bgColor: "white",
};

export default Circles;
