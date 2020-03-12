import React from 'react';
import renderer from "react-test-renderer";
import CircleDisplay  from "./index";
 
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


it("circles displays  correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
            <CircleDisplay />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});