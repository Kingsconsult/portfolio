import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import WhyHireMe from "../src/molecules/whyhireme";

import { ThemeProvider } from "styled-components";

import HorizontalCard from "./organisms/card2";

const theme = {
  mode: "light"
};



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: "background : #Ff3f 0% 0% no-repeat padding-box"
          }}
        />
        <WhyHireMe></WhyHireMe>

      </div>
    </ThemeProvider>
  );
}

export default App;
