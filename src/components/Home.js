import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import homeJumbo from "../assets/home/home_jumbo.svg";
import homeJumboSmall from "../assets/home/home_jumboSmall.svg";
import whyChoose1 from "../assets/home/why_choose1.svg";
import whyChoose2 from "../assets/home/why_choose2.svg";
import whyChoose3 from "../assets/home/why_choose3.svg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1>Delivering IT solutions right at your fingertips</h1>
            <p>
              Chamaeleon Software takes pride in delivering IT solutions in an
              agile way. We develop and launch your products and services in no
              time. Our goal is to delight you and your customers by helping you
              discover and deliver true value in sustainable ways.
            </p>
            <Link to="/contact-us">
              <input
                type="button"
                className="btn__blue"
                value="Contact Us   →"
              />
            </Link>
          </div>
          <img src={homeJumbo} alt="HomeJumbo" className="home__jumboImg" />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="app__jumbotronSmall">
        <div className="home__main">
          <img
            src={homeJumboSmall}
            alt="HomeSmallJumbo"
            className="home__jumboImg"
          />
          <div className="home__subDesc">
            <h1>Where Innovation Meets Performance and Delivery</h1>
            <p>
              We help our customers innovate while keeping in mind what their
              customers would value equally: performance and fast delivery. As
              we are all in a disruptive digital age, time is our enemy.
              Launching a product or service as fast as possible with features
              that would deliver true value is key.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="app__jumbotron">
        <div className="home__whyChoose">
          <h1>Why Choose Chamaeleon Software?</h1>
          <div className="home__whyChooseGrid">
            <img src={whyChoose1} alt="One" />
            <div className="home__whyChooseDesc">
              <h2>We only hire experienced IT professionals</h2>
              <p>
                Everyone we hire brings a wealth of IT experience to the table.
                This real-world knowledge gives us a unique perspective into the
                strategies that work and those that don’t; we want to share the
                most effective ones with you.
              </p>
            </div>
            <img src={whyChoose2} alt="Two" />
            <div className="home__whyChooseDesc">
              <h2>We create a 100% custom solution for any problem</h2>
              <p>
                Our team provides a 100% unique, handcrafted solution to fit
                your specific IT needs. We won't design a new infrastructure
                from scratch; we'll take the system you have now and find
                cost-effective ways to make it more capable and secure.
              </p>
            </div>
            <img src={whyChoose3} alt="Three" />
            <div className="home__whyChooseDesc">
              <h2>We take a holistic approach to IT and Security</h2>
              <p>
                We embrace a collaborative approach to meet your IT needs. That
                means we’ll work with you to get your input about business
                goals, special concerns, and how you envision your business in
                the future. We’ll take that input and turn it into a capable,
                cost-effective system that can grow with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default Home;
