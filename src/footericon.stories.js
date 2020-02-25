import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import FooterLogo from "./molecules/footericons";
const theme = {
  mode: "light"
};

export default {
  title: "Footer Logo",
  component: FooterLogo,
    decorators: [withA11y, withKnobs]
};

export const circleMolecule = () => (
  <ThemeProvider theme={theme}>
    <FooterLogo></FooterLogo>
  </ThemeProvider>
);
