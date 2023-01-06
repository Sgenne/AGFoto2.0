import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles["navbar"]} container row m-auto`}>
      <div className="col-6">
        <h1>
          Ann-Marie Genne Foto 🦨
        </h1>
      </div>
      <ul className={`col-6 text-end row  ${styles["navbar-links"]}`}>
        <li className="col-3">
          <a href="https://www.google.com">
            Galleri
          </a>
        </li>
        <li className="col-3">
          <a href="https://www.google.com">
            Om mig
          </a>
        </li>
        <li className="col-3">
          <a href="https://www.google.com">
            Info
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar