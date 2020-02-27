import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";

import WhyHireMePage from "../pages/whathireme";
const theme = {
  mode: "light"
};

export default {
  title: "Why Hire Me Page",
  component: WhyHireMePage,
  decorators: [withA11y, withKnobs]
};

export const WhyHireMePages = () => (
         <ThemeProvider theme={theme}>
           <WhyHireMePage></WhyHireMePage>
         </ThemeProvider>
       );
