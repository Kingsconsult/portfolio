import React from "react";
import CreativeWork from "../../molecules/creativeworks";
import Card from "../../components/cards";
import PageWrapper from "./style";

const CreativePage = () => (
  <PageWrapper>
    <div className="creativepage">
      <div className="img">
        <div className="images"></div>
      </div>
      <div className="info">
        <div className="creativetext">
          <CreativeWork></CreativeWork>
        </div>
        <div>
          <Card cardlayout="vertical"></Card>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default CreativePage;
