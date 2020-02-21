import theme from "styled-theming";

export const lineLayout = theme.variants("mode", "linelayout", {
         horizontal: { light: "height: 30px; width: 3px" },
         vertical: { light: "height: 3px; width: 45px" }
       });
