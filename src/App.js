import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import RoundBackground from "./molecules/roundBackground";
import { ThemeProvider } from "styled-components";

import HorizontalCard from "./organisms/card2";
import FooterLinks from "./molecules/footerLinks";

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

        <FooterLinks></FooterLinks>
      </div>
    </ThemeProvider>
  );
}

export default App;
