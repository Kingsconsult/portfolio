import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "../components/buttons";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y, withKnobs]
};

export const defaultButton = () => (
         <ThemeProvider theme={theme}>
           <Button bgColor="blue" color="white" padding="small">
             Small Button!
           </Button>
           <Button bgColor="blue" color="white" padding="big">
             BIg Button!
           </Button>
           <Button bgColor="blue" color="white" padding="xlarge">
             xlarge Button!
           </Button>
         </ThemeProvider>
       );



