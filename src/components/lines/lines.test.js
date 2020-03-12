import React from 'react';
import renderer from "react-test-renderer";
import Lines  from "./index";
 
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


it("cards renders correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
            <Lines />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});