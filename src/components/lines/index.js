import styled from "styled-components";
import PropTypes from "prop-types";
import { color, bgColor } from "../colors";
import { lineLayout, lineLayout1 } from "./mixins";

const Line = styled.div`
  ${color};
  ${lineLayout};
  ${lineLayout1};
  ${bgColor};
`;

Line.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "vertical"])
};

Line.defaultProps = {
  size: "vertical"
};

export default Line;
