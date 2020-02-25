import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import LandingPage from "../pages/landingPage";
const theme = {
  mode: "light"
};

export default {
  title: "Landing Page",
  component: LandingPage,
  decorators: [withA11y, withKnobs]
};

export const LandingPages = () => (
    <ThemeProvider theme={theme}>
        <LandingPage></LandingPage>
    </ThemeProvider>
)