import React from 'react';
import './App.css';
import NavLinks from "./components/links"
import Button from "./components/buttons"
import Typography from "./components/typography"
import Circles from "./components/circles"
import Line from "./components/lines"
import {ThemeProvider} from "styled-components"
const theme={
  mode:"light"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <h1>hello</h1>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
