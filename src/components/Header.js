import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <a href="/#sectionOne">
        <img className="logo" src="/img/gnglogo.png"></img>
      </a>
    </div>
  );
}
