import React from "react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import OurCraft from "./components/OurCraft";
import OurExpertise from "./components/OurExpertise";
import "./App.scss";
import "./styles/Home.scss";
import "./styles/NavigationBar.scss";
import "./styles/Footer.scss";
import "./styles/About.scss";
import "./styles/OurCraft.scss";
import "./styles/ContactUsSmall.scss";
import "./styles/OurExpertise.scss";
import "./styles/ContactUs.scss";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <NavigationBar />
            <About />
            <Footer />
          </Route>

          <Route path="/our-craft">
            <NavigationBar />
            <OurCraft />
            <Footer />
          </Route>

          <Route path="/our-expertise">
            <NavigationBar />
            <OurExpertise />
            <Footer />
          </Route>

          <Route path="/contact-us">
            <NavigationBar />
            <ContactUs />
            <Footer />
          </Route>

          <Route path="/">
            <NavigationBar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
