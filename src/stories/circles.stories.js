import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Circles from "../components/circles";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Circle",
  component: Circles,
  decorators: [withA11y, withKnobs]
};

export const circle = () => (
         <ThemeProvider theme={theme}>
           <Circles circleHeight="small" circleWidth="small" border="border">
             {" "}
           </Circles>
           <Circles
             circleHeight="small"
             circleWidth="small"
             border="border"
             hover="blueBackground"
           ></Circles>
           <Circles
             bgColor="blueGrey"
             circleHeight="medium"
             circleWidth="medium"
           >
             {" "}
           </Circles>
           <Circles
             bgColor="white"
             circleHeight="large"
             circleWidth="large"
             border="border"
             hover="blueBackground"
             hoverBorder="border"
           >
             {" "}
           </Circles>
         </ThemeProvider>
       );
