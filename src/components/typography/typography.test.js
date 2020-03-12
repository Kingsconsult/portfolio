import React from 'react';
import renderer from "react-test-renderer";
import Typography  from "./index";
 
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


it("typography renders correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
            <Typography />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});