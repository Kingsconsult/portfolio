import theme from "styled-theming";


const buttonPadding = theme.variants("mode", "padding", {
    small: { light: "7px 25px" },
    big: { light: "10px 40px" },
    xlarge: { light: "15px 50px" }
  });

  export default buttonPadding