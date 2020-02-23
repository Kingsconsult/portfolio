import theme from "styled-theming";

export const lineLayout = theme.variants("mode", "linelayout", {
         horizontal: { light: "height: 30px; width: 5px" },
         vertical: { light: "height: 5px; width: 50px" }
       });
