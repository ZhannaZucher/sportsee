import { useParams } from "react-router-dom"
import Card from "../../components/Card/Card"
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
  const user = new FormatData(data).formatUserData()

  if (error) {
    return <span className="error-msg"> Oups! Il y a un problème...</span>
  }

  return user && user?.keyData ? (
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
            <ActivityChart id={userId} />
            <div className="chart-container__row">
              <SessionsChart id={userId} />
              <PerformanceChart id={userId} />
              <ScoreChart score={user.score} />
            </div>
          </div>
          <aside className="stat-aside">
            {user.keyData.map((data, index) => (
              <Card
                key={index}
                alt="icon"
                icon={data.icon}
                value={data.count}
                type={data.name}
                unit={data.unit}
              />
            ))}
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
