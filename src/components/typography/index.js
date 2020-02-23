import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../colors";
import {textSize} from "./mixins"

const Typography = styled.h1`
  ${color};
  text-decoration: none;
  text-align: left;
  letter-spacing: 0.5px;
  ${textSize};
`;

Typography.propTypes = {
  variant: PropTypes.oneOf(["small", "big", "xlarge"])
};

Typography.defaultProps = {
  size: "small"
};

export default Typography;
