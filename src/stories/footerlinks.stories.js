import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import FooterLinks from "../molecules/footerLinks";

const theme = {
  mode: "light"
};

export default {
  title: "Footer links",
  component: FooterLinks,
  decorators: [withA11y, withKnobs]
};

export const FooterLink = () => (
    <ThemeProvider theme={theme}>
        <FooterLinks></FooterLinks>
    </ThemeProvider>
)