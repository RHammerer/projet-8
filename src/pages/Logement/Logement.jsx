import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import data from "../../data/logements.json";
import Caroussel from "../../components/Caroussel/Caroussel";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./logement.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Rating/Rating";

export default function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const getLogement = (id) => {
    const item = data.find((appart) => appart.id === id);
    return item;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const appart = getLogement(id);

    if (appart === undefined) {
      return navigate("/erreur-404");
    }
    setLogement(appart);
  });

  console.log(logement);

  if (!logement) return <div>Chargement...</div>;

  return (
    <>
      <Navigation />
      <main>
        <Caroussel slides={logement.pictures} />
        <h1 className="nom-logement" onClick={() => console.log("coco")}>
          {logement.title}
        </h1>
        <p className="location">{logement.location}</p>
        <ul className="container-tags">
          {logement.tags.map((tag) => (
            <li className="tags">{tag}</li>
          ))}
        </ul>
        <div className="host">
          <img src={logement.host.picture} alt="hote du logement" />
          <p>{logement.host.name}</p>
        </div>
        <Rating rating={logement.rating} />
        <div className="dropdown">
          <Dropdown title="Description" description={logement.description} />
          <Dropdown title="Équipements" equipments={logement.equipments} />
        </div>
      </main>
      <Footer />
    </>
  );
}
