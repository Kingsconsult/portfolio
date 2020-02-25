import theme from "styled-theming";

export const navigationLinks = theme.variants("mode", "linkType", {
  nav: { light: "font-size: 14px" },
  footer: { light: "font-size: 18px" }
});

export const hover = theme.variants("mode", "hover", {
  blueBackground: { light: "&:hover {color: blue}" }
});
