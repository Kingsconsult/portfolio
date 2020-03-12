import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import ThemeContext  from "./themeContext"

const ContextProvider = props => {
     const [mode, setMode] = useState("light");

     const changeTheme = () => {
          let newMode = mode === 'dark' ? "light" : "dark";
          setMode(newMode);
     }

     return (
          <ThemeContext.Provider value={{changeTheme, mode}}>
      <ThemeProvider theme={{ mode }}>{props.children}</ThemeProvider>
          </ThemeContext.Provider>
     )
}
export default ContextProvider;