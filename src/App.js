import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

import CreativeWork from "./molecules/creativeworks"
import { ThemeProvider } from "styled-components"
const theme={
  mode:"light"
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: "background : #Ff3f 0% 0% no-repeat padding-box"
          }}
        />

<CreativeWork></CreativeWork>

      </div>
    </ThemeProvider>
  );
}

export default App;
