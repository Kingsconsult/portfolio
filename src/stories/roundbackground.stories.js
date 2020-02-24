import React from 'react';
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import RoundBackground from '../molecules/roundBackground';
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


export default {
  title: "Round Background",
  component: RoundBackground,
  decorators: [withA11y, withKnobs]
};

export const RoundedBackground = () => (

        <ThemeProvider theme={theme}>
            <RoundBackground></RoundBackground>
        </ThemeProvider>
    )

