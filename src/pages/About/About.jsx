import Navigation from "../../components/Navigation/Navigation";
import imgBanner from "../../assets/about.jpeg";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";

import "./about.css";
import Dropdown from "../../components/Dropdown/Dropdown";

// const data = [
//   {
//     title: '',
//     description: '',
//   }
// ]

export default function About() {
  return (
    <>
      <Navigation />
      <Banner url={imgBanner} />
      <section className="section-about">
        {/* {data.map(item => <Dropdown title={item.title} description={item.description}  />)} */}
        <Dropdown
          title={"Fiabilité"}
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title={"Respect"}
          description={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.`}
        />
        <details className="drop-down-about">
          <summary className="summary-about">
            Service
            <img className="arrow-up" src={ArrowUp} alt="Flèche haut" />
            <img className="arrow-down" src={ArrowDown} alt="Flèche bas" />
          </summary>
          <p className="paragraph-about">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </details>
        <details className="drop-down-about">
          <summary className="summary-about">
            Sécurité
            <img className="arrow-up" src={ArrowUp} alt="Flèche haut" />
            <img className="arrow-down" src={ArrowDown} alt="Flèche bas" />
          </summary>
          <p className="paragraph-about">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </details>
      </section>
      <Footer />
    </>
  );
}
