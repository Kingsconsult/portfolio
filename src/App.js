import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import NavLinks from "./components/links";
import Button from "./components/buttons";
import Typography from "./components/typography";
import Circles from "./components/circles";
import Line from "./components/lines";
import Card from "./components/cards";
import NavBar from "./molecules/navbar";
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
            style: "background : #Ff3f 0% 0% no-repeat padding-box"
          }}
        />
        <NavBar></NavBar>
      </div>
    </ThemeProvider>
  );
}

export default App;
