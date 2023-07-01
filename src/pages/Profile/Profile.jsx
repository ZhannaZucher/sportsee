//import getData from "../../utils/API"
//import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"
import "./Profile.css"
import useFetch from "../../utils/hooks/useFetch"
import BarChart from "../../components/BarChart/BarChart"
import FormatData from "../../utils/FormatData/FormatData"

export default function Profile() {
  const { id } = useParams()
  const userId = parseInt(id)
  /*const [user, setUser] = useState(null)

  useEffect(() => {
    const data = getData(id, "userData")
    console.log(data)
    setUser(data)

    //const data = getData(id, "activity")
  }, [id])
  */

  const { data, error } = useFetch(userId, "userData")
  const user = data
  console.log(user)
  //a mettre dans RadialChart :
  //const score = FormatData.formatScore(user)
  // console.log(score)

  if (error) {
    return <span> Oups! Il y a un problème</span>
  }

  return user && user.keyData ? (
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
          <div className="stat-container">
            <BarChart id={userId} />
          </div>
          <aside className="stat-aside">
            <Card
              icon={energy}
              alt="energy"
              value={`${FormatData.formatValue(
                user?.keyData?.calorieCount
              )}kCal`}
              type="Calories"
            />
            <Card
              icon={chicken}
              alt="chicken"
              value={`${FormatData.formatValue(user?.keyData?.proteinCount)}g`}
              type="Proteines"
            />
            <Card
              icon={apple}
              alt="apple"
              value={`${FormatData.formatValue(
                user?.keyData?.carbohydrateCount
              )}g`}
              type="Glucides"
            />
            <Card
              icon={burger}
              alt="burger"
              value={`${FormatData.formatValue(user?.keyData?.lipidCount)}g`}
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
