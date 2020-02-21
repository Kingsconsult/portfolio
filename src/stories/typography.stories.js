import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../components/typography";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};

export default {
  title: "Typography",
  component: Typography,
  decorators: [withA11y, withKnobs]
};

export const paragraph = () => (
         <ThemeProvider theme={theme}>
    <Typography size="paragraph">
      paragraph
             Lorem ipsum dolor sit amet, imperdiet ut consectetuer molestie
             nulla consequat. Varius enim fringilla, quam fermentum nec tellus,
             quam semper sollicitudin rutrum gravida. Ac ac orci magna et
             integer, suspendisse lectus, non justo ut facilis enim porttitor.
           </Typography>
           <Typography size="small">small text</Typography>
           <Typography size={"big"}>Normal text</Typography>
           <Typography size={"xlarge"}>Xlarge text</Typography>
         </ThemeProvider>
       );




