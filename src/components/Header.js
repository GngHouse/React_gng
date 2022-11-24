import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to ="/">
            <img className="logo" src="/img/gnglogo.png"></img>
            </Link>
        </div>
    )
}