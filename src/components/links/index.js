import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../colors"
import { navigationLinks, hover} from "./mixins"


const NavLinks = styled.a`
  ${color};
  font-weight: bold;
  text-align: left;
  letter-spacing: 0.rem;
  text-transform: uppercase;
  ${navigationLinks};
  ${hover}
`;

NavLinks.propTypes = {
  variant: PropTypes.oneOf(["nav", "footer"])
};

NavLinks.defaultProps = {
  size: "nav"
};

export default NavLinks;
