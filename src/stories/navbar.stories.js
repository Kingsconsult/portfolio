import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import NavBar from "../molecules/navbar";
import { ThemeProvider } from "styled-components";
import Card from "../components/cards";
import kings_logo from "../assets/images/kings_logo.jpg";
import NavLinks from "../components/links";
import Button from "../components/buttons";
import {navlist} from "../molecules/navbar/mixins"
const theme = {
  mode: "light"
};

export default {
  title: "Navbar",
  component: NavBar,
  decorators: [withA11y, withKnobs]
};


export const NavBarUp = () => (
         <ThemeProvider theme={theme}>
           <div style={{ display: "flex", justifyContent: "space around" }}>
             <Card
               cardLayout="horizontalNavbar"
               borderRadius="yes"
               bgColor="white"
               style={{
                 display: "flex",
                 width: "950px",
                 justifyContent: "flex-end"
               }}
             >
               <div
                 style={{
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "space-around"
                 }}
               >
                 <img
                   src={kings_logo}
                   alt="kings"
                   style={{ alignItems: "center", marginRight: "250px" }}
                 />
                 {navlist.map(({ path, pathname }) => (
                   <NavLinks
                     to={path}
                     color="black"
                     linkType="nav"
                     hover="blueBackground"
                     style={{
                       display: "flex",
                       justifyContent: "space-around",
                       marginLeft: "25px"
                     }}
                   >
                     {pathname}
                   </NavLinks>
                 ))}

                 <Button
                   bgColor="blue"
                   color="white"
                   padding="small"
                   style={{ marginLeft: "30px" }}
                 >
                   HIRE ME
                 </Button>
               </div>
             </Card>
           </div>
         </ThemeProvider>
       );
