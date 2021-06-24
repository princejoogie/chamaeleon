import React, { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contactUs">
      <div className="app__spacer"></div>

      <div className="cus__title big">
        <h1>Contact Us</h1>
        <p>
          We'd be delighted to hear from you. Add another sentence here. Add
          another sentence here.
        </p>
      </div>
      <div className="cus__row">
        <div className="cus__col">
          <h3>First Name</h3>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="cus__col">
          <h3>Last Name</h3>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="cus__col">
          <h3>Email Address</h3>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="cus__col">
          <h3>Phone Number</h3>
          <input type="text" id="fname" name="fname" />
        </div>
      </div>
      <div className="cus__col message">
        <h3>Message</h3>
        <textarea type="text" id="fname" name="fname" />
      </div>
      <input type="button" className="btn__blue btn__send" value="Send   →" />

      <div className="app__spacer"></div>
      {/* 
      <h1>You may also reach us at</h1>

      <div className="contactUs__social">
        <img src={fb} alt="facebook" />
        <div className="social__desc">
          <h4>PlanetReviews Facebook Page</h4>
          <p>Join our Facebook Page to catch our news and updates.</p>
        </div>
      </div>

      <div className="contactUs__social">
        <img src={msg} alt="messenger" />
        <div className="social__desc">
          <h4>PlanetReviews Facebook Messenger</h4>
          <p>Chat with us for any questions or concerns.</p>
        </div>
      </div>

      <div className="app__spacer"></div> */}
      <div style={{height: "500px"}}/>
    </div>
  );
}

export default ContactUs;
