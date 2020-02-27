import React from "react";
import PageWrapper from "./style";
import HorizontalCard2 from "../../organisms/horizontalCard2";
import HorizontalBanner from "../../molecules/horizontalBanner";
import FooterLinks from "../../molecules/footerLinks";
import FooterLogos from "../../organisms/footericons";
import Typography from "../../components/typography";

const FooterPage = () => (
  <PageWrapper>
    <div className="customersreview">
      <div className="review">
        <div className="clients">
          <Typography size="xlarge" className="client">
            What My Clients are saying about me
          </Typography>
        </div>
        <div className="reviews">
          <HorizontalCard2></HorizontalCard2>
          <HorizontalCard2></HorizontalCard2>
        </div>
      </div>
      <div
        className="bannerfooter"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="banner" style={{ alignSelf: "center" }}>
          <HorizontalBanner></HorizontalBanner>
        </div>
        <div
          className="footer"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="links" style={{ marginTop: "80px" }}>
            <FooterLinks></FooterLinks>
          </div>
          <div className="icons" style={{ marginTop: "30px" }}>
            <FooterLogos></FooterLogos>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default FooterPage;
