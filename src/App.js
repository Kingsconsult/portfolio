import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import RoundBackground from "../src/molecules/roundBackground";
import { ThemeProvider } from "styled-components";
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
        <RoundBackground></RoundBackground>
      </div>
    </ThemeProvider>
  );
}

export default App;
