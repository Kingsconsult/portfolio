import React from 'react';
import renderer from "react-test-renderer";
import Button from "./index";
import snapshotDiff from "snapshot-diff";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};


it("renders correctly when called ", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
            <Button />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});