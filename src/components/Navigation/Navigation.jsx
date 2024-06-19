import { NavLink } from "react-router-dom";
import "./navigation.css";
import logoKasa from "../../assets/LOGO.svg";

export default function Navigation() {
  return (
    // <header>
    <nav>
      <img className="kasa-hdp" src={logoKasa} alt="Logo Kasa" />
      <ul className="ul-nav">
        <li>
          <NavLink to="/"> Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
