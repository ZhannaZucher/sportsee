import FormatData from "../../utils/FormatData/FormatData"
import useFetch from "../../utils/hooks/useFetch"
import PropTypes from "prop-types"
import "./PerformanceChart.css"
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts"

export default function PerformanceChart({ id }) {
  const { data } = useFetch(id, "performance")
  const performance = new FormatData(data).formatPerformanceData()

  return (
    <div className="performance">
      <ResponsiveContainer>
        <RadarChart innerRadius={10} outerRadius="70%" data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#ffffff", fontSize: "0.68em" }}
          />

          <Radar
            dataKey="value"
            stroke="#9B9EAC"
            fill="#E60000"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  id: PropTypes.number.isRequired,
}
