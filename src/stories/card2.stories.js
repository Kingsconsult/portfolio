import React from 'react';
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import HorizontalCard from '../organisms/card2';
const theme = {
  mode: "light"
};


export default {
  title: "Card 2",
  component: HorizontalCard,
  decorators: [withA11y, withKnobs]
};

export const HorizontalCard1 = () => (
    <ThemeProvider theme={theme}>
        <HorizontalCard></HorizontalCard>
    </ThemeProvider>
)