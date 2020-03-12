import theme from "styled-theming";


export const textSize = theme.variants("mode", "size", {
  paragraph: { light: "font-size: 14px", dark: "font-size: 14px" },
  small: { light: "font-size: 16px", dark: "font-size: 16px" },
  big: { light: "font-size: 20px",  dark: "font-size: 20px"  },
  xlarge: { light: "font-size: 32px", dark: "font-size: 32px" }
});
