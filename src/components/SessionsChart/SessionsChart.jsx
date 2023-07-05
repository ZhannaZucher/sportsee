import FormatData from "../../utils/FormatData/FormatData"
import useFetch from "../../utils/hooks/useFetch"
import PropTypes from "prop-types"
import "./SessionsChart.css"
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  //Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function SessionsChart({ id }) {
  const { data } = useFetch(id, "average-sessions")
  const sessions = FormatData.formatToWeekDays(data)
  console.log(sessions)

  /*const CustomizeDot = () => {
    return <img src={customDot} alt="activeDot" />
  }*/

  const LegendContent = () => {
    return (
      <span className="sessions__legend">
        Durée moyenne des <br /> sessions
      </span>
    )
  }

  return (
    <div className="sessions">
      <ResponsiveContainer>
        <LineChart
          data={sessions}
          margin={{
            top: 30,
            right: -1,
            left: -1,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            style={{
              opacity: 0.5,
              fill: "#ffffff",
              fontWeight: 500,
              fontSize: 12,
            }}
            //padding={{ left: 20, right: 20 }}
          />
          <YAxis hide padding={{ top: 50, bottom: 20 }} />
          {/*<Tooltip />*/}
          <Legend
            content={<LegendContent />}
            align="left"
            verticalAlign="top"
            wrapperStyle={{ left: 30 }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeOpacity={0.7}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionsChart.propTypes = {
  id: PropTypes.number.isRequired,
}
