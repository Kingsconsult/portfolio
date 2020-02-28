import React from 'react';
import renderer from "react-test-renderer";
import Button from "./index";
import snapshotDiff from "snapshot-diff";
import { ThemeProvider } from "styled-components";
const theme = {
  mode: "light"
};
// test("snapshot difference between 2 strings", () => {
//   expect(snapshotDiff(a, b)).toMatchSnapshot();
// });


// test("snapshot difference between 2 React components state", () => {
//   expect(
//     snapshotDiff(<Button test="say" />, <Button test="my name" />)
//   ).toMatchSnapshot();
// });

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