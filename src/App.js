import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import HorizontalBanner from "./molecules/horizontalBanner";


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
<HorizontalBanner></HorizontalBanner>
      </div>
    </ThemeProvider>
  );
}

export default App;
