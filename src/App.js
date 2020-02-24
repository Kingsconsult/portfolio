import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";


import RoundBackground from "../src/molecules/roundBackground";
import { ThemeProvider } from "styled-components";
import Card1 from "./organisms/card1";
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
        <Card1></Card1>

      </div>
    </ThemeProvider>
  );
}

export default App;
