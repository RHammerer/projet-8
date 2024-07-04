import { Link } from "react-router-dom";
import "./thumbnail.css";

export default function Thumbnail({ appart }) {
  return (
    <Link to={`/logement/${appart.id}`}>
      <figure className="thumbnail">
        <img src={appart.cover} alt={appart.title} />
        <figcaption className="appart-name">{appart.title}</figcaption>
      </figure>
    </Link>
  );
}
