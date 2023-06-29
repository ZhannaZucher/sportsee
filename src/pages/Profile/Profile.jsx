import getData from "../../utils/API"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"
import "./Profile.css"

export default function Profile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    //const data = fetchData(id, "userData")
    setUser(getData(id, "userData"))

    //const data = fetchData(id, "activity")
    //console.log(data)
  }, [id])

  return user.keyData ? (
    <main>
      <div className="content">
        <div className="greeting">
          <p className="greeting__title">
            Bonjour <span>{user.userInfos.firstName}</span>
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
              value={`${user.keyData.calorieCount}kCal`}
              type="Calories"
            />
            <Card
              icon={chicken}
              alt="chicken"
              value={`${user.keyData.proteinCount}g`}
              type="Proteines"
            />
            <Card
              icon={apple}
              alt="apple"
              value={`${user.keyData.carbohydrateCount}g`}
              type="Glucides"
            />
            <Card
              icon={burger}
              alt="burger"
              value={`${user.keyData.lipidCount}g`}
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
