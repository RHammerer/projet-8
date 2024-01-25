import "./dropdown.css";

import ArrowUp from "../../assets/arrow-up.svg";

export default function Dropdown({ title, description }) {
  return (
    <details className="drop-down-about">
      <summary className="summary-about">
        {title}
        <img className="arrow-up" src={ArrowUp} alt="Flèche haut" />
      </summary>
      <p className="paragraph-about">{description}</p>
    </details>
  );
}
