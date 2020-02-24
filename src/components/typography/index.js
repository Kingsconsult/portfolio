import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../colors";
import {textSize} from "./mixins"

const Typography = styled.h1`
  ${color};
  text-decoration: none;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  ${textSize};
`;

Typography.propTypes = {
  variant: PropTypes.oneOf(["small", "big", "xlarge"])
};

Typography.defaultProps = {
  size: "small"
};

export default Typography;
