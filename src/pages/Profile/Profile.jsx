import mockData from "../../data/data"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"
import "./Profile.css"

export default function Profile() {
  const userMainData = mockData.USER_MAIN_DATA
  const { id } = useParams()
  const queryId = userMainData.find((user) => user.id === parseInt(id))
  console.log(queryId)

  return queryId ? (
    <main>
      <div className="content">
        <div className="greeting">
          <p className="greeting__title">
            Bonjour <span>{queryId.userInfos.firstName}</span>
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
              value={`${queryId.keyData.calorieCount}kCal`}
              type="Calories"
            />
            <Card
              icon={chicken}
              alt="chicken"
              value={`${queryId.keyData.proteinCount}g`}
              type="Proteines"
            />
            <Card
              icon={apple}
              alt="apple"
              value={`${queryId.keyData.carbohydrateCount}g`}
              type="Glucides"
            />
            <Card
              icon={burger}
              alt="burger"
              value={`${queryId.keyData.lipidCount}g`}
              type="Lipides"
            />
          </aside>
        </div>
      </div>
    </main>
  ) : (
    <div className="error">
      <p> Oups ! Cet utilisateur n'existe pas.</p>
    </div>
  )
}
