import React from 'react';
import './App.css';
import NavLinks from "./components/links"
import Button from "./components/buttons"
import Typography from "./components/typography"
import Circles from "./components/circles"
import {ThemeProvider} from "styled-components"
const theme={
  mode:"light"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <NavLinks color="black" linkType="nav" hover="blueBackground">
            all works
          </NavLinks>
          <div>
            <NavLinks color="black" linkType="footer" hover="blueBackground">
              portfolio
            </NavLinks>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
