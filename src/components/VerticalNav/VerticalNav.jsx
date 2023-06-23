import { NavLink } from "react-router-dom"
import yoga from "../../assets/yoga-icon.png"
import cycling from "../../assets/cycling-icon.png"
import swimming from "../../assets/swimming-icon.png"
import dumbbells from "../../assets/dumbbells-icon.png"
import "./VerticalNav.css"

export default function VerticalNav() {
  return (
    <div className="vertical">
      <nav className="vertical-nav">
        <NavLink to="#">
          <img src={yoga} alt="yoga" />
        </NavLink>
        <NavLink to="#">
          <img src={swimming} alt="swimming" />
        </NavLink>
        <NavLink to="#">
          <img src={cycling} alt="cycling" />
        </NavLink>
        <NavLink to="#">
          <img src={dumbbells} alt="dumbbells" />
        </NavLink>
      </nav>
      <p className="vertical__copyright">Copiryght, SportSee 2023</p>
    </div>
  )
}
