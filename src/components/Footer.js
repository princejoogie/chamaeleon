import React from "react";
import logo from "../assets/footer_logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <img src={logo} alt="logo" />
        <p>Chamaeleon Software IT Consulting Inc. © 2020</p>
      </div>
      <div className="footer__row left">
        <div className="footer__smList">
          <FacebookIcon className="footer__sm" fontSize="inherit" />
          <TwitterIcon className="footer__sm" fontSize="inherit" />
          <LinkedInIcon className="footer__sm" fontSize="inherit" />
          <InstagramIcon className="footer__sm" fontSize="inherit" />
        </div>
        <p>About • Our Solutions • Services Offered • Contact Us</p>
      </div>
    </div>
  );
}

export default Footer;
