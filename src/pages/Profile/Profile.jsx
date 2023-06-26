import Card from "../../components/Card/Card"
import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"
import VerticalNav from "../../components/VerticalNav/VerticalNav"
import "./Profile.css"

export default function Profile() {
  return (
    <main>
      <VerticalNav />
      <div className="content">
        <div className="greeting">
          <p className="greeting__title">
            Bonjour <span>Thomas</span>
          </p>
          <p className="greeting__subtitle">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className="stat-row">
          <div className="stat-container"></div>
          <aside className="stat-aside">
            <Card
              icon={energy}
              alt="energy"
              value="1,930kCal"
              type="Calories"
            />
            <Card icon={chicken} alt="chicken" value="155g" type="Proteines" />
            <Card icon={apple} alt="apple" value="290g" type="Glucides" />
            <Card icon={burger} alt="burger" value="90g" type="Lipides" />
          </aside>
        </div>
      </div>
    </main>
  )
}
