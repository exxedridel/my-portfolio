import React from "react";

const ListProyects = (props) => {
  return (
    <article className="post">
      <h2>{props.element.title}</h2>
      <a href={props.element.linkUrl}>
        <p className="go-to">Go to project</p>
        <img src={props.element.image} alt={`Proyect ${props.element.id}`} />
      </a>
      <p>{props.element.description}</p>
      <div className="github-buttons">
        <a href={props.element.proyectUrl}>
          <button className="button">Github repository</button>
        </a>
      </div>
    </article>
  );
};

export default ListProyects;
