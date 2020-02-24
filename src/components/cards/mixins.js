import theme from "styled-theming";

export const cardLayout = theme.variants("mode", "cardlayout", {
  horizontal: { light: "height: 150px; width: 220px" },
  vertical: { light: "height: 200px; width: 180px" },
  horizontalLong: { light: "height: 75px; width: 300px" },
  horizontalBanner: { light: "height: 120px; width: 750px" },
  horizontalNavbar: { light: "height: 50px; width: 750px" }

});

export const borderRadius = theme.variants("mode", "borderRadius", {
  yes: { light: "border-radius: 50px" }
})