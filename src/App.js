import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import WhatILovePage from "./pages/whatilove";
import LandingPage from "./pages/landingPage";
import WhyHireMePage from "./pages/whathireme";

const theme = {
  mode: "light"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: "background : white 0% 0% no-repeat padding-box"
          }}
        />
        {/* <LandingPage></LandingPage> */}
        {/* <WhatILovePage></WhatILovePage> */}
        <WhyHireMePage></WhyHireMePage>
      </div>
    </ThemeProvider>
  );
}

export default App;
