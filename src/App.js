import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import RoundBackground from "./molecules/roundBackground";
import { ThemeProvider } from "styled-components";
import HorizontalBanner from "./molecules/horizontalBanner";
import HorizontalCard from "./organisms/card2";
import FooterLinks from "./molecules/footerLinks";
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
            style: "background : #Fee 0% 0% no-repeat padding-box"
          }}
        />

        <FooterLogos></FooterLogos>

      </div>
    </ThemeProvider>
  );
}

export default App;
