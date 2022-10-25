export default function ListProyects(props) {
  return (
    <article className="post">
      <h2>{props.element.title}</h2>
      <a href={props.element.linkUrl}>
        <p>{props.element.linkName}</p>
        <img
          src={props.element.image}
          alt={`Proyect ${props.element.id}`}
        />
      </a>
      <p>{props.element.description}</p>
      <div className="github-buttons">
        <a href={props.element.proyectUrl}>
          <button className="button">Github repository</button>
        </a>
      </div>
    </article>
  );
}
