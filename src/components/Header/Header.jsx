import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="#">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <NavLink to="#">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </header>
  )
}
