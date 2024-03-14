import "./dropdown.css";

import ArrowUp from "../../assets/arrow-up.svg";

export default function Dropdown({ title, description, equipments }) {
  return (
    <details className="drop-down-about">
      <summary className="summary-about">
        {title}
        <img className="arrow-up" src={ArrowUp} alt="Flèche haut" />
      </summary>
      {description && <p className="paragraph-about">{description}</p>}
      {equipments && <ul className="liste-equipements" >
        {
          equipments.map(item => <li key={item}>{item}</li>)
        }
        </ul>}
    </details>
  );
}
