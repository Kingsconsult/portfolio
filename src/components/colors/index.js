import theme from 'styled-theming';
import styled from "styled-components";
import PropTypes from "prop-types";



export const color = theme.variants("mode", "color", {
         white: { light: "color :#FFFFFF" },
         whiteDark: { light: "color :#F9F9FB" },
         whiteDarker: { light: "color :#F6F7FB" },
         blue: { light: "color :#5569FF" },
         blueLight: { light: "color :#4355FE" },
         blueGrey: {light: "color :#EEF0FC" },
         blueGreyDark: { light: "color :#C2C9FD" },
         blueGreyLight: { light: "color :#EDF1fc" },
         black: { light: "color :#353535" },
         blackDeep: { light: "color :#1D1D1D" },
         blackLight: { light: "color :#FEFEFE" },
       });
  
  export const bgColor = theme.variants("mode", "bgColor", {
    white: { light: "background-color :#FFFFFF" },
    whiteDark: { light: "background-color :#F9F9FB" },
    whiteDarker: { light: "background-color :#F6F7FB" },
    blue : { light: "background-color :#5569FF" },
    blueLight: { light: "background-color :#4355FE" },
    blueGrey: {light: "background-color :#EEF0FC" },
    blueGreyDark: {light: "background-color :#C2C9FD"},
    blueGreyLight: { light: "background-color :#EDF1fc" },
    black: { light: "background-color :#353535" },
    blackDeep: { light: "background-color :#1D1D1D" },
    blackLight: { light: "background-color :#FEFEFE" },
  });

  const Colors = styled.div`
    ${color};
    ${bgColor};

  `;

  Colors.propTypes = {
    variant: PropTypes.oneOf(["white", "blue", "black"])
  };

  export default Colors