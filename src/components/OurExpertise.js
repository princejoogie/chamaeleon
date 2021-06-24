import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ourExpertiseJumbo from "../assets/our_expertise/ourExpertise_jumbo.svg";
import one from "../assets/our_expertise/one.svg";
import two from "../assets/our_expertise/two.svg";
import three from "../assets/our_expertise/three.svg";
import four from "../assets/our_expertise/four.svg";
import five from "../assets/our_expertise/five.svg";

function OurExpertise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="app__jumbotron">
        <div className="home__main">
          <div className="home__mainDesc">
            <h1>Our Expertise</h1>
            <p>
              Chamaeleon Software IT Consulting Inc. is an IT startup company
              founded in June 2019 based in the Philippines and Singapore and
              currently catering clients in the banking, retail and online
              retail industries.
            </p>
            <Link to="/contact-us">
              <input
                type="button"
                className="btn__blue"
                value="Contact Us   →"
              />
            </Link>
          </div>
          <img
            src={ourExpertiseJumbo}
            alt="ExpertiseJumbo"
            className="home__jumboImg"
          />
        </div>
      </div>

      <div className="app__spacer"></div>

      <div className="expertise">
        <div className="expertise__container">
          <img src={one} alt="one" />
          <div className="expertise__card">
            <h3>Agile Software Development</h3>
            <p>
              Using pragmatic ways and continuously improving best engineering
              practices, we apply industry-proven Agile frameworks to
              iteratively develop and yet quickly deliver working software
              focusing on what really matters to our customers - software
              quality, faster time to market and realistic achievement of ROI.
              <br></br>
              <br></br>
              From prototyping to production, may it be a small e-commerce
              website or enterprise systems with integration requirements, we
              have a solid team with diverse experience in working through a
              full software development cycle delivering from a Minimum Viable
              Product to continuously evolving scaled versions.
            </p>
          </div>
        </div>

        <div className="expertise__row">
          <div className="expertise__container">
            <img src={two} alt="two" />
            <div className="expertise__card">
              <h3>AI-Powered Data Engines</h3>
              <p>
                We apply Artificial Intelligence where it matters most. Aiding
                human sensibly where it needs help - efficiency, detection and
                prediction. We care about on improving the current systems and
                human impact, and able to pave the way to reach our customer's
                desired future state. The Python AI ecosystem, TensorFlow,
                PyTorch are one of the few that we use to respond to our
                NLP-related needs. As we get to learn more on our customer's
                needs, we utilize AI to help our customers uncover their deeper
                problems and set realistic, valuable and sustainable solutions
                that is continuously learning and evolving to adapt to the
                future's needs and challenges.
              </p>
            </div>
          </div>
          <div className="expertise__container">
            <img src={three} alt="three" />
            <div className="expertise__card">
              <h3>Agile Product Delivery</h3>
              <p>
                While Agile framework is our way to software development, we
                foster Social Enterprise Thinking in our Product Development. We
                design products using Design Thinking + Human Centered Design to
                quickly deliver a valuable prototype that will help us to either
                pursue a certain path or pivot into a practical solution that
                will definitely save a fortune of our resources, most
                importantly, our customer's. For exploration projects, we have
                experts always on the go for disruptive designs. After all, our
                ultimate goal is to create a lasting change with the products
                and services we deliver.
              </p>
            </div>
          </div>
          <div className="expertise__container">
            <img src={four} alt="four" />
            <div className="expertise__card">
              <h3>DevOps and Automation Testing</h3>
              <p>
                We setup the DevOps team customized to your needs in order to
                maximize quality, velocity and efficiency by assessing and
                recommending the top DevOps tools, how to use them, identify
                metrics that matters to your organization, automating tests that
                can be automated, perform shift-left testing, help you measure
                true progress and ultimately bridging the gap between your IT
                operations and software development teams.
              </p>
            </div>
          </div>
          <div className="expertise__container">
            <img src={five} alt="five" />
            <div className="expertise__card">
              <h3>IT Consulting</h3>
              <p>
                We have an army of truly experienced Agile practitioners and
                evangelists that delivers both in-house and public Agile
                trainings and certifications and extends our expertise beyond
                the training classroom, focused on delivering digital
                transformation. We train and groom our aspiring agilists to
                become a full-pledged and certified Scrum Masters, Scrum
                Developers, Product Owners, Agile Project Managers, Certified
                SAFe ® Agilist, SAFe ® Practitioners, SAFe ® Scrum Masters, SAFe
                ® Product Owner/ Product Manager thru our SAFe ® Program
                Consultants and SAFe ® Release Train Engineers and help them
                continuously grow by connecting them thru Agile communities and
                Community of Practice. We assess and provide tailor-fit
                trainings that contribute to the success of managing projects
                and to the careers of those leading them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__spacer"></div>
    </div>
  );
}

export default OurExpertise;
