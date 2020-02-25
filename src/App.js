import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import { ThemeProvider } from "styled-components";

import FooterLogos from "./organisms/footericons";

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

        <FooterLogos></FooterLogos>
      </div>
    </ThemeProvider>
  );
}

export default App;
