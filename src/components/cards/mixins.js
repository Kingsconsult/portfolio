import theme from "styled-theming";

export const cardLayout = theme.variants("mode", "cardlayout", {
         horizontal: { light: "height: 150px; width: 220px" },
         vertical: { light: "height: 180px; width: 150px" },
         horizontalLong: { light: "height: 75px; width: 300px" },
         horizontalBanner: { light: "height: 120px; width: 750px" }
       });
