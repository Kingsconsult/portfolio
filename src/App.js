import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import ErrorBoundary from "./errorBoundaries";

const WhatILovePage = React.lazy(() => import("./pages/whatilove"));
const LandingPage = React.lazy(() => import("./pages/landingPage"));
const WhyHireMePage = React.lazy(() => import("./pages/whathireme"));
const CreativePage = React.lazy(() => import("./pages/mycreativepage"));
const FooterPage = React.lazy(() => import("./pages/footerPage"));

const theme = {
  mode: "light"
};

function App() {
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
                <Route path="/whatilove" component={WhatILovePage}></Route>
                <Route path="/creative" component={CreativePage}></Route>
                <Route path="/hireme" component={WhyHireMePage}></Route>
                <Route path="/footer" component={FooterPage}></Route>
              </Switch>
            </div>
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
