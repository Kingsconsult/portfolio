import React from "react";
import NavLinks from "../../components/links";

const FooterLinks = () => (
  <div
    style={{ display: "flex", width: "45vw", justifyContent: "space-around" }}
  >
    <NavLinks color="black" hover="blueBackground" linkTyle="footer">
      HOME
    </NavLinks>
    <NavLinks color="black" hover="blueBackground" linkTyle="footer">
      SERVICES
    </NavLinks>
    <NavLinks color="black" hover="blueBackground" linkTyle="footer">
      PORTFOLIO
    </NavLinks>{" "}
    <NavLinks color="black" hover="blueBackground" linkTyle="footer">
      REVIEW
    </NavLinks>{" "}
    <NavLinks color="black" hover="blueBackground" linkTyle="footer">
      CONTACT
    </NavLinks>
  </div>
);

export default FooterLinks;

//   <NavLinks
//     to={path}
//     color="black"
//     linkType="nav"
//     hover="blueBackground"
//     style={{
//       display: "flex",
//       justifyContent: "space-around",
//       marginLeft: "25px"
//     }}
//   >
//     {pathname}
//   </NavLinks>
