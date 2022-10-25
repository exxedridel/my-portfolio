import React from "react";
import { Link } from "react-router-dom";
import heved from "../assets/images/heved.png";
import whatsapp from "../assets/images/whatsapp.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import "../styles/App.css";

function App() {
  return (
    <div className="About">
      <div className="card">
        <div className="card_details">
          <div className="card_photo center circle">
            <img src={heved} alt="heved" />
          </div>
          <p className="card_value">Heved Ríos</p>
          <p className="card_title">Frontend developer | React</p>
        </div>
        <div className="card_userdata">
          <p>Universidad Tecnológica Latinoamericana</p>
        </div>
        <div className="card_social">
          <div className="phone">
            <a href="https://wa.me/524777861996">
              <img src={whatsapp} alt="whatsapp" />
              <p>Phone</p>
            </a>
          </div>
          <div className="e-mail">
            <a href="mailto:hevedrios@gmail.com">
              <img src={gmail} alt="gmail" />
              <p>E-mail</p>
            </a>
          </div>
          <div className="profile">
            <a href="https://www.linkedin.com/in/heved-rios">
              <img src={linkedin} alt="linkedin" />
              <p>Profile</p>
            </a>
          </div>
          <div className="portfolio">
            <Link to="portfolio">
              <img src={github} alt="github" />
              <p>Portfolio</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
