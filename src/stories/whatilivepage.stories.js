import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import WhatILovePage from "../pages/whatilove";
const theme = {
  mode: "light"
};

export default {
  title: "What I like Page",
  component: WhatILovePage,
  decorators: [withA11y, withKnobs]
};

export const WhatILovePages = () => (
  <ThemeProvider theme={theme}>
    <WhatILovePage></WhatILovePage>
  </ThemeProvider>
);
