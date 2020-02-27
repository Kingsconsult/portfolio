import theme from "styled-theming";

export const cardLayout = theme.variants("mode", "cardlayout", {
  horizontal: { light: "height: 250px; width: 380px" },
  vertical: { light: "height: 210px; width: 200px" },
  horizontalLong: { light: "height: 100px; width: 450px" },
  horizontalBanner: { light: "height: 120px; width: 750px" },
  horizontalNavbar: { light: "height: 50px; width: 750px" }

});

export const borderRadius = theme.variants("mode", "borderRadius", {
  yes: { light: "border-radius: 50px" }
})