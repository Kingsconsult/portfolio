import React from 'react';
import Card1 from '../organisms/card1';
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";

const theme = {
  mode: "light"
};

export default {
  title: "Card 1",
  component: Card1,
  decorators: [withA11y, withKnobs]
};

export const CardStory = () => (
         <ThemeProvider theme={theme}>
           <Card1></Card1>
         </ThemeProvider>
       );