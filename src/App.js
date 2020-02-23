import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import WhatILove from "../src/molecules/whatilove";
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
        <WhatILove></WhatILove>
      </div>
    </ThemeProvider>
  );
}

export default App;
