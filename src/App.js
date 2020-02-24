import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";
import HorizontalCard2 from "./organisms/horizontalCard2";
const theme = {
  mode: "light"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: "background : #Fff 0% 0% no-repeat padding-box"
          }}
        />
        <HorizontalCard2></HorizontalCard2>
      </div>
    </ThemeProvider>
  );
}

export default App;
