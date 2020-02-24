import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import RoundBackground from "./molecules/roundBackground"
import { ThemeProvider } from "styled-components";
import CircleDisplay from "./molecules/circleMolecule";
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
        <CircleDisplay></CircleDisplay>
      </div>
    </ThemeProvider>
  );
}

export default App;
