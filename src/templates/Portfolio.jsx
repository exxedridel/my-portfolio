import React from "react";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";
import ListProyects from "../components/ListProyects";
import data from "../data";

const Portfolio = () => {
  const proyectsList = data.map((el) => {
    return <ListProyects key={el.id} element={el} />;
  });

  return (
    <>
      <header id="titulo">
        <Link to="/">
          <h1>Portfolio</h1>
        </Link>
      </header>
      <section className="container">{proyectsList}</section>
    </>
  );
};

export default Portfolio;
