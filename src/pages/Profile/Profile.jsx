import Card from "../../components/Card/Card"
import energy from "../../assets/energy.svg"
import chicken from "../../assets/chicken.svg"
import apple from "../../assets/apple.svg"
import burger from "../../assets/burger.svg"
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
              classModifier="--red"
              value="1,930kCal"
              type="Calories"
            />
            <Card
              icon={chicken}
              alt="chicken"
              classModifier="--blue"
              value="155g"
              type="Proteines"
            />
            <Card
              icon={apple}
              alt="apple"
              classModifier="yellow"
              value="290g"
              type="Glucides"
            />
            <Card
              icon={burger}
              alt="burger"
              classModifier="rose"
              value="90g"
              type="Lipides"
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
