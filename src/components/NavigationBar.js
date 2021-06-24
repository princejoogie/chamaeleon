import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavigationBar() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const logo = document.querySelector(".navbar__logo img");

    if (offsetY > 0) {
      navbar.classList.add("onScroll");
      logo.style.height = "5vh";
    } else {
      navbar.classList.remove("onScroll");
      logo.style.height = "10vh";
    }
  }, [offsetY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const hamburger = document.querySelector(".navbar__hamburger");
    const navLinks = document.querySelector(".navbar__links");

    const logo = document.querySelector(".navbar__logo");
    const ourCraft = document.querySelector("#nav__ourCraft");
    const ourExpertise = document.querySelector("#nav__ourExpertise");
    const about = document.querySelector("#nav__about");
    const contactUs = document.querySelector("#nav__contactUs");

    logo.addEventListener("click", () => {
      ourCraft.classList.remove("navbar__selected");
      ourExpertise.classList.remove("navbar__selected");
      about.classList.remove("navbar__selected");
      contactUs.classList.remove("navbar__selected");
    });

    ourCraft.addEventListener("click", () => {
      ourCraft.classList.add("navbar__selected");
      ourExpertise.classList.remove("navbar__selected");
      about.classList.remove("navbar__selected");
      contactUs.classList.remove("navbar__selected");
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    ourExpertise.addEventListener("click", () => {
      ourCraft.classList.remove("navbar__selected");
      ourExpertise.classList.add("navbar__selected");
      about.classList.remove("navbar__selected");
      contactUs.classList.remove("navbar__selected");
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    about.addEventListener("click", () => {
      ourCraft.classList.remove("navbar__selected");
      ourExpertise.classList.remove("navbar__selected");
      about.classList.add("navbar__selected");
      contactUs.classList.remove("navbar__selected");
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    contactUs.addEventListener("click", () => {
      ourCraft.classList.remove("navbar__selected");
      ourExpertise.classList.remove("navbar__selected");
      about.classList.remove("navbar__selected");
      contactUs.classList.add("navbar__selected");
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__all">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" height={64} />
        </Link>

        <div className="navbar__hamburger">
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
          <div className="navbar__line"></div>
        </div>

        <ul className="navbar__links">
          <li>
            <Link to="/our-craft" className="navbar__link" id="nav__ourCraft">
              Our Craft
            </Link>
          </li>
          <li>
            <Link
              to="/our-expertise"
              className="navbar__link"
              id="nav__ourExpertise"
            >
              Our Expertise
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__link" id="nav__about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="navbar__link" id="nav__contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
