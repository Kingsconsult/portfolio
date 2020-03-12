// import React  from "react";
import { createContext} from "react";

const ThemeContext = createContext({
     mode: "light",
     changeTheme: () => {}
});
export default ThemeContext;