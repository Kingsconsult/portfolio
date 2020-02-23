import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "../../components/cards";
import NavLinks from "../../components/links";
import Button from "../../components/buttons";
import kings_logo from "../../assets/images/kings_logo.jpg";

const theme = {
  mode: "light"
};
const navlist = [
  {
    path: "/",
    pathname: "Home"
  },
  {
    path: "/",
    pathname: "Services"
  },
  {
    path: "/",
    pathname: "Portfolio"
  },
  {
    path: "/",
    pathname: "Review"
  },
  {
    path: "/",
    pathname: "Contact"
  }
];
const NavBar = () => {
  return (
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
};

export default NavBar;
