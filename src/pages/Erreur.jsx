import "./erreur.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function Erreur() {
  return (
    <section className="div-erreur">
      <Navigation />
      <ul className="ul-erreur">
        <li>
          <p className="code-erreur">404</p>
        </li>
        <li>
          <p className="text-erreur">
            Oups! La page que vous demandez n'éxiste pas
          </p>
        </li>
        <li>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </li>
      </ul>
      <Footer />
    </section>
  );
}
