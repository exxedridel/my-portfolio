import React from "react";
import Capture1a from "../assets/images/Capture1a.JPG";
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
          <h2>Magazine & Store - Bajo la Música App</h2>
          <a href="https://silver-buttercream-9d33ca.netlify.app">
            <p>https://silver-buttercream-9d33ca.netlify.app</p>
            <img src={Capture1a} alt="capture1a" />
          </a>
          <p>
            This will be the official Bajo la Musica™ App in which local artists
            can get their music to know, sell NFT art, and merch. Web app is
            been created using React.js, Webpack and Babel to escalate it into a
            Next.js PWA. User interface was made following a figma wireframe and
            is atomic and responsive designed. The products already shown are
            consumed from an example API.
          </p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">Github repository</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>Employee Management Web App - San Roque</h2>
          <a href="http://hevedrios.pythonanywhere.com">
            <p>http://hevedrios.pythonanywhere.com</p>
            <img src={Capture2} alt="capture2" />
          </a>
          <p>
            This is the Manufacturea San Roque™ web app, which is an employee
            management system plus rewards store. This one was developed in
            Python's Flask framework and SQLite as database. User Interface was
            created using Bootstrap with responsive design. Since credentials
            are provided by company, you can use this one to navigate:
            user="Heved123", password="123456".
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
            This site has been built with React.js. Has been initialized with
            npx create-react-app. Templates were made from scratch with
            JS-HTML-CSS and UI is responsive design.
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
