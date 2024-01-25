import "./erreur.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Erreur() {
  return (
    <section className="div-erreur">
      <Navigation />
      <ul className="ul-erreur">
        <li>
          <p className="code-erreur">404</p>
        </li>
        <li>
          <p className="text-erreur">Oups! La page que vous demandez n'éxiste pas</p>
        </li>
        <li>
          <a href="index.html">Retourner à la page d'accueil</a>
        </li>
      </ul>
      <Footer />
    </section>
  );
}
