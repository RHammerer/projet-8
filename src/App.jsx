import hautDePage from "./assets/hdp.jpeg";
import Banner from "./components/Banner/Banner";
import Navigation from "./components/Navigation/Navigation";
import data from "./data/logements.json";

import "./App.css";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import Footer from "./components/Footer/Footer";

export default function App() {
  console.log(data);
  return (
    <>
      <header>
        <Navigation />
        <Banner url={hautDePage} title="Chez vous, partout et ailleurs" />
      </header>
      <section className="section-appartement">
        <div className="thumbnail-container">
          {data.map((appart) => (
            <Thumbnail appart={appart} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
