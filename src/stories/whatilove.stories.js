import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import { ThemeProvider } from "styled-components";
import WhatILove from "../molecules/whatilove";
const theme = {
  mode: "light"
};

export default {
  title: "WhatILove",
  component: WhatILove,
  decorators: [withA11y, withKnobs]
};

export const WhatILoveToDO = () => (
  <ThemeProvider theme={theme}>
    <WhatILove></WhatILove>
  </ThemeProvider>
);
