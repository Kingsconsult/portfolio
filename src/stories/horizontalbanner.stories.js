import React from 'react';
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import HorizontalBanner from "../molecules/horizontalBanner"

const theme = {
  mode: "light"
};

export default {
  title: "Horizontal Banner",
  component: HorizontalBanner,
  decorators: [withA11y, withKnobs]
};

export const HorizontalBanner2 = () => (
    <ThemeProvider theme={theme}>
        <HorizontalBanner></HorizontalBanner>
    </ThemeProvider>
)