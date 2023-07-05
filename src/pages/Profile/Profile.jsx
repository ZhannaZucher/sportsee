import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"
import "./Profile.css"
import useFetch from "../../utils/hooks/useFetch"
import ActivityChart from "../../components/ActivityChart/ActivityChart"
import FormatData from "../../utils/FormatData/FormatData"
import ScoreChart from "../../components/ScoreChart/ScoreChart"
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart"
import SessionsChart from "../../components/SessionsChart/SessionsChart"

export default function Profile() {
  const { id } = useParams()
  const userId = parseInt(id)

  const { data, error } = useFetch(userId, "userData")
  const user = data
  const score = FormatData.formatScore(user)

  if (error) {
    return <span> Oups! Il y a un problème</span>
  }

  return user && user.keyData ? (
    <main>
      <div className="content">
        <div className="greeting">
          <h1 className="greeting__title">
            Bonjour <span>{user.userInfos.firstName}</span>
          </h1>
          <h2 className="greeting__subtitle">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </div>
        <div className="stat-row">
          <div className="chart-container">
            <div className="activity-chart-container">
              <ActivityChart id={userId} />
            </div>
            <div className="chart-container__row">
              <SessionsChart id={userId} />
              <PerformanceChart id={userId} />
              <ScoreChart score={score} />
            </div>
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
