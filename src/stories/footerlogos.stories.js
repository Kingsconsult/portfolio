import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import FooterLogos from "../organisms/footericons";
const theme = {
  mode: "light"
};

export default {
  title: "footer logos",
  component: FooterLogos,
  decorators: [withA11y, withKnobs]
};

export const RoundedBackground = () => (
  <ThemeProvider theme={theme}>
    <FooterLogos></FooterLogos>
  </ThemeProvider>
);
