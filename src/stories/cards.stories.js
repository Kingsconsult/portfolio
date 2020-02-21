import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "../components/cards";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Card",
  component: Card,
  decorators: [withA11y, withKnobs]
};

export const card = () => (
         <ThemeProvider theme={theme}>
           <div>
             <h1>Vertical Card</h1>
             <div>
               <Card cardlayout="vertical" bgColor="white"></Card>
             </div>
           </div>
           <div>
             <h1>horizontal Card</h1>

             <Card cardlayout="horizontal" bgColor="white"></Card>
           </div>
           <div>
             <h1>horizontal Long</h1>

             <Card cardlayout="horizontalLong" bgColor="white"></Card>
           </div>
           <div>
             <h1>horizontal Banner</h1>

             <Card cardlayout="horizontalBanner" bgColor="white"></Card>
           </div>
         </ThemeProvider>
       );
