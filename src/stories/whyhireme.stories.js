import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import WhyHireMe from "../molecules/whyhireme";
const theme = {
  mode: "light"
};

export default {
  title: "Why Hire me",
  component: WhyHireMe,
  decorators: [withA11y, withKnobs]
};

export const WhatILoveToDO = () => (
  <ThemeProvider theme={theme}>
    <div>
      <WhyHireMe></WhyHireMe>
    </div>
  </ThemeProvider>
);
