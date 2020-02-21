import theme from "styled-theming";

export const lineLayout = theme.variants("mode", "lineHeight", {
  horizontal: { light: "height: 30px" },
  vertical: { light: "height: 3px" },
});

export const lineLayout1 = theme.variants("mode", "lineWidth", {
  horizontal: { light: "width: 3px" },
  vertical: { light: "width: 45px" }
});
