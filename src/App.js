import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import LandingPage from "./pages/landingPage";

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

        <LandingPage></LandingPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
