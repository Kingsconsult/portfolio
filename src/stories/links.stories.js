import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import NavLinks from "../components/links";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "NavLinks",
  component: NavLinks,
  decorators: [withA11y, withKnobs]
};

export const paragraph = () => (
         <ThemeProvider theme={theme}>
           <NavLinks color="black" linkType="nav" hover="blueBackground">
             navbar links
           </NavLinks>
           <div>
             <NavLinks color="black" linkType="footer" hover="blueBackground">
               footer links
             </NavLinks>
           </div>
         </ThemeProvider>
       );
