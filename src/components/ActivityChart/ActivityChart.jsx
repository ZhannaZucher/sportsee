import FormatData from "../../utils/FormatData/FormatData"
import useFetch from "../../utils/hooks/useFetch"
import PropTypes from "prop-types"
import "./ActivityChart.css"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

export default function ActivityChart({ id }) {
  const { data } = useFetch(id, "activity")
  const activity = new FormatData(data).formatActivityData()

  return (
    <div className="activity">
      <h2 className="activity__label">Activité quotidienne</h2>
      <ResponsiveContainer>
        <BarChart
          data={activity}
          barGap={8}
          margin={{ top: 24, right: 30, bottom: 20, left: 43 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            scale="point"
            style={{
              fill: "#9B9EAC",
              fontWeight: 500,
              fontSize: 14,
            }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            hide
            tickLine={false}
            axisLine={false}
            tickCount={4}
            padding={{ top: 45 }}
            //domain={["dataMin-100", "dataMax+100"]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={4}
            tickMargin={30}
            style={{
              fill: "#9B9EAC",
              fontWeight: 500,
              fontSize: 14,
            }}
            padding={{ top: 45 }}
            domain={["dataMin-1", "dataMax+5"]}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            verticalAlign="top"
            align="right"
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="282D30"
            barSize={6}
            radius={[3, 3, 0, 0]}
            name={"Poids (kg)"}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={6}
            radius={[3, 3, 0, 0]}
            name={"Calories brûlées (kCal)"}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ActivityChart.propTypes = {
  id: PropTypes.number.isRequired,
}