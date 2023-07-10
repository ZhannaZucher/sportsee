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

  const renderLegend = (props) => {
    const { payload } = props

    return (
      <div className="activity__legend">
        <span className="activity__legend-label">Activité quotidienne</span>
        <ul>
          {payload.map((entry, index) => (
            <li key={`item-${index}`}>{entry.value}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="activity">
      <ResponsiveContainer>
        <BarChart
          data={activity}
          margin={{ top: 24, right: 30, bottom: 20, left: 40 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" hide />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickCount={4}
            domain={["dataMin-1", "dataMax+1"]}
          />
          <Legend
            //content={renderLegend}
            iconType="circle"
            iconSize={8}
            verticalAlign="top"
            align="right"
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={6}
            maxBarSize={10}
            radius={[20, 20, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={6}
            maxBarSize={10}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ActivityChart.propTypes = {
  id: PropTypes.number.isRequired,
}
