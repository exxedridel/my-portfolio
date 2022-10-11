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
          <h2>Web App - Bajo la Música™ Magazine</h2>
          <a href="https://bajolamusica.netlify.app">
            <p>https://bajolamusica.netlify.app</p>
            <img
              src="https://images2.imgbox.com/8c/e8/zmeQdMJ0_o.jpg"
              alt="capture1a"
            />
          </a>
          <p>
            This will be the official Bajo la Musica™ web app in which local
            artists can get their music to know. Website is been created using
            React framework and will escalate into a Next.js PWA. Navbar was
            created following a Figma wireframe but all other UI/UX by myself.
            This project is on a test phase to be released soon.
          </p>
          <div className="github-buttons">
            <a href="https://github.com/exxedridel/BajoLaMusicaPJ">
              <button className="button">Github repository</button>
            </a>
          </div>
        </article>

        <article className="post">
          <h2>Web App - San Roque™ Employee Manager</h2>
          <a href="http://hevedrios.pythonanywhere.com">
            <p>http://hevedrios.pythonanywhere.com</p>
            <img src={Capture2} alt="capture2" />
          </a>
          <p>
            This is the web app I delivered to Manufacturera San Roque™ as
            result of my professional practices, which is an employee management
            system plus rewards store. This one was developed in Python's Flask
            framework and SQLite as database. User Interface was created using
            Bootstrap. You can use this credentials to full navigate - user:
            Heved123, password: 123456.
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
            This site has been built with npx create-react-app. Templates were
            made from scratch with JS-HTML-CSS and UI is responsive design.
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
