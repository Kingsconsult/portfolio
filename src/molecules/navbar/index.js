import React from "react";
import Card from "../../components/cards";
import NavLinks from "../../components/links";
import Button from "../../components/buttons";
import kings_logo from "../../assets/images/kings_logo.jpg";
import { navlist } from "./mixins";
import { Link } from "react-router-dom";
import ThemeContext from "../../contextProvider/themeContext"

const theme = {
  mode: "light"
};

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space around" }}>
      <Card
        cardLayout="horizontalNavbar"
        borderRadius="yes"
        bgColor="white"
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "flex-end",
          position: "absolute",
          left: "130px",
          top: "10px"
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
            style={{ alignSelf: "center", marginRight: "250px" }}
          />
          {navlist.map(({ path, pathname }) => (
            <Link
              to={path}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              <NavLinks
                to={path}
                color="black"
                linkType="nav"
                hover="blueBackground"
                style={{
                  display: "flex",
                  marginLeft: "25px"
                }}
              >
                {pathname}
              </NavLinks>
            </Link>
          ))}
          {/* <Link to="/hireme"> */}
            <Button
              bgColor="blue"
              color="white"
              padding="small"
              // style={{ marginLeft: "30px" }}
              // onClick={console.log('hi')}
              >
              CHANGE THEME
            </Button>
          {/* </Link> */}
        </div>
      </Card>
    </div>
  );
};

export default NavBar;
