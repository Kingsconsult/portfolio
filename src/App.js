import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./errorBoundaries";
import ThemeContext from "./contextProvider/themeContext";
import contextProvider from "./contextProvider/contextProvider"

const WhatILovePage = React.lazy(() => import("./pages/whatilove"));
const LandingPage = React.lazy(() => import("./pages/landingPage"));
const WhyHireMePage = React.lazy(() => import("./pages/whathireme"));
const CreativePage = React.lazy(() => import("./pages/mycreativepage"));
const FooterPage = React.lazy(() => import("./pages/footerPage"));

const theme = {
  mode: "light"
};

function App() {
  const [theme, setTheme] = useState({mode: "light"});

  const changeTheme = () => {
    setTheme({
      theme: theme.mode  === 'dark' ? "light" : "dark",
    })
  }
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div className="lds-roller">Loading...</div>}>

          <ThemeProvider theme={theme}>
            <div className="App">
              <Helmet
                bodyAttributes={{
                  style: "background : white 0% 0% no-repeat padding-box"
                }}
              />
              <Switch>
                <Route path="/" component={LandingPage} exact></Route>
                <Route path="/footer" component={FooterPage}></Route>
                <Route path="/hireme" component={WhyHireMePage}></Route>
                <Route path="/creative" component={CreativePage}></Route>
                <Route path="/whatilove" component={WhatILovePage}></Route>
              </Switch>
            </div>
              {/* <contextProvider>hi</contextProvider> */}
          </ThemeProvider>
                    <ThemeContext.Provider value={{...theme, changeTheme}}>

                    </ThemeContext.Provider>
                    

        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
