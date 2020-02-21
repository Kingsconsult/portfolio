import styled from "styled-components";
import PropTypes from "prop-types";
import { color, bgColor } from "../colors";
import { lineLayout } from "./mixins";

const Line = styled.div`
  ${color};
  ${lineLayout};
  ${bgColor};
`;

Line.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "vertical"])
};

Line.defaultProps = {
  size: "vertical"
};

export default Line;
