import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Line from "../components/lines";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Line",
  component: Line,
  decorators: [withA11y, withKnobs]
};

export const line = () => (
         <ThemeProvider theme={theme}>
           <div>
             <h1>Vertical line</h1>
             <Line
               linelayout="vertical"
               bgColor="blue"
             ></Line>
           </div>
           <div>
             <h1>horizontal line</h1>

             <Line
               linelayout="horizontal"
               bgColor="blue"
             ></Line>
           </div>
         </ThemeProvider>
       );
