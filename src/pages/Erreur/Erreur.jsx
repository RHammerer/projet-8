import "./erreur.css";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Header from "../../components/Navigation/Header";

export default function Erreur() {
  return (
    <>
      <Header />

      <main>
        <section className="div-erreur">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
