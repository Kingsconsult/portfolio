import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import NavLinks from "./components/links"
import Button from "./components/buttons"
import Typography from "./components/typography"
import Circles from "./components/circles"
import Line from "./components/lines"
import Card from "./components/cards"
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
            style: "background : #Fff 0% 0% no-repeat padding-box"
          }}
        />
        <div>
          <h1>Vertical Card</h1>
          <div>
            <Card cardlayout="vertical" bgColor="white"></Card>
          </div>
        </div>
        <div>
          <h1>horizontal Card</h1>

          <Card cardlayout="horizontal" bgColor="white"></Card>
        </div>
        <div>
          <h1>horizontal Long</h1>

          <Card cardlayout="horizontalLong" bgColor="white"></Card>
        </div>
        <div>
          <h1>horizontal Banner</h1>

          <Card cardlayout="horizontalBanner" bgColor="white"></Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
