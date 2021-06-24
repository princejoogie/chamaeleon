import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ourCraftJumbo from "../assets/our_craft/ourCraft_jumbo.svg";
import thePlanetReviews from "../assets/our_craft/planet_reviews.png";
import barterPh from "../assets/our_craft/barter_ph.png";
import ButtonGooglePlay from "../assets/our_craft/btn_google_play.svg";

function OurCraft() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1>Our Craft</h1>
            <p>
              When we develop a solution, we focus on Economic and Social
              Innovation. We deep dive into social challenges requiring systemic
              solutions that are grounded in our customer's needs. In a matter
              of months, we can rapidly prototype, test and get our customer's
              feedback and market faster.
            </p>
            <Link to="/contact-us">
              <input
                type="button"
                className="btn__blue"
                value="Contact Us   →"
              />
            </Link>
          </div>
          <img src={ourCraftJumbo} alt="OurCraft" className="home__jumboImg" />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="app__jumbotronSmall">
        <div className="about__desc">
          <h3>The BarterPH - the true essence of free trading</h3>
          <p>
            In just two months, we were able to developed and launched the
            BarterPh App mobile application in our goal to help the farmers
            trade their fresh goods in exchange for non-commercial items they
            need in their household without spending a peso. Wait, there's more!
            The BarterPh App can be used by anyone too and enjoy the features of
            the platform for efficient and free trading. Try it and let us know
            how we can improve it so you can forever enjoy it for free!
          </p>
          <br></br>
          <h3>PlanetReviews - revolutionizing consumer reviews</h3>
          <p>
            The PlanetReviews is still under development phase as this platform
            showcases an ecosystem where consumers are aimed to be democratized
            from ages of being misled by dishonest reviews where they mostly end
            up wasting their hard-earned money in mediocre products and
            services. Get thrilled and be part of an awesome platform where you
            can find the biggest community of honest and reliable reviews and
            get rewarded. Want to have a sneak peak? Checkout&nbsp;
            <a
              href="https://www.theplanetreviews.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ourCraft__tpr">theplanetreviews.com</span>
            </a>
            for more information.
          </p>
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="ourCraft__apps">
        <div className="ourCraft__appItem">
          <img src={thePlanetReviews} alt="theplanetreviews" />
          <h1>PlanetReviews</h1>
          <p>On-going Development</p>
        </div>
        <div className="ourCraft__appItem">
          <img src={barterPh} alt="theplanetreviews" />
          <h1>BarterPH</h1>
          <p>Available on Android</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.chamaeleon.barterapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ourCraft__button"
              src={ButtonGooglePlay}
              alt="getOnGooglePlay"
            />
          </a>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default OurCraft;
