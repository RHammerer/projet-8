import hautDePage from "./assets/hdp.jpeg";
import Banner from "./components/Banner/Banner";
import data from "./data/logements.json";

import "./home.css";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navigation/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner url={hautDePage} title="Chez vous, partout et ailleurs" />
        <section className="section-appartement">
          <div className="thumbnail-container">
            {data.map((appart) => (
              <Thumbnail key={appart.id} appart={appart} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
