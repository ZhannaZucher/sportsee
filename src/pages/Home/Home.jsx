import { NavLink } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <main className="home">
      <h1 className="home__title">Bienvenue chez SportSee !</h1>
      <h2 className="home__subtitle">
        Veuillez choisir le profil que vous souhaitez consulter :
      </h2>
      <div className="links">
        <button className="links__btn">
          <NavLink to="/12">Karl</NavLink>
        </button>
        <button className="links__btn">
          <NavLink to="/18">Cecilia</NavLink>
        </button>
      </div>
    </main>
  )
}
