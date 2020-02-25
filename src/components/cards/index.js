import styled from "styled-components";
import PropTypes from "prop-types";
import { color, bgColor } from "../colors";
import { cardLayout, borderRadius } from "./mixins";

const Card = styled.div`
  ${color};
  ${cardLayout};
  ${bgColor};
  ${borderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  position: relative;
`;

Card.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "vertical"])
};

Card.defaultProps = {
  size: "vertical"
};

export default Card;
