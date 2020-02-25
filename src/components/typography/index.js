import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../colors";
import {textSize} from "./mixins"

const Typography = styled.h1`
  ${color};
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  ${textSize};
`;

Typography.propTypes = {
  variant: PropTypes.oneOf(["small", "big", "xlarge", "paragraph"])
};

Typography.defaultProps = {
  size: "small"
};

export default Typography;
