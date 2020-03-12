import React from 'react';
import renderer from "react-test-renderer";
import Links  from "./index";
 
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


it("links renders correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
            <Links />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});