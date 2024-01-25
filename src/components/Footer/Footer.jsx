import "./footer.css";
import logoFooter from "../../assets/logo-mobile.svg";

export default function Footer(footer) {
  return (
    <footer>
      <img className="logo-footer" src={logoFooter} alt="Logo footer Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
