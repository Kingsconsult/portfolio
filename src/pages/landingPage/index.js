import React from "react";
import NavBar from "../../molecules/navbar";
import HeroInfo from "../../molecules/heroinfo";
import hero from "../../assets/images/hero.jpg";
import PageWrapper from "./style";

const LandingPage = () => (
  <PageWrapper>
    <div className="landingPage">
      <div className="navbar">
        <NavBar></NavBar>
      </div>
      <div className="herodiv">
        <div className="heroimg">
          <img src={hero} alt="hero" />
        </div>
        <div className="heroinfo">
          <div className="herotext">
            <HeroInfo className="kings"></HeroInfo>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default LandingPage;
