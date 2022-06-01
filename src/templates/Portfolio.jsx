import React from "react";
import Capture1 from "../assets/images/Capture1.JPG";
import Capture2 from "../assets/images/Capture2.JPG";
import Capture3 from "../assets/images/Capture3.JPG";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <header id="titulo">
        <h1>Portfolio</h1>
      </header>
      <section className="container">
        <article className="post">
          <h2>NFT Store - Bajo la Música</h2>
          <a href="https://silver-buttercream-9d33ca.netlify.app">
            <p>https://silver-buttercream-9d33ca.netlify.app</p>
            <img src={Capture1} alt="capture1" />
          </a>
          <p>
            This will be a web app to buy NFTs which is been created using
            React.js, Webpack and Babel. User interface was made following a
            figma wireframe and is atomic responsive design. The products shown
            are randomly taken from an example API.
          </p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">Github repository</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>Management App - San Roque</h2>
          <a href="http://hevedrios.pythonanywhere.com">
            <p>http://hevedrios.pythonanywhere.com</p>
            <img src={Capture2} alt="capture2" />
          </a>
          <p>
            This is a fully funtional web application for employee management
            created using Flask framework and SQLite as Data Base. User
            Interface was created from Bootstrap with responsive design. Login
            is required to navigate: User Heved123 | Pass 123456 .
          </p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/SanRoquePJ">
              <button className="button">Github repository</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>Portfolio - Heved Ríos</h2>
          <a href="https://spectacular-daffodil-996245.netlify.app">
            <p>https://spectacular-daffodil-996245.netlify.app</p>
            <img src={Capture3} alt="capture3" />
          </a>
          <p>
            This site has been built with React.js. Initialized with npx
            create-react-app. Templates were made from scratch with HTML-CSS and
            responsive design UI.
          </p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/my-portfolio">
              <button className="button">Github repository</button>
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
