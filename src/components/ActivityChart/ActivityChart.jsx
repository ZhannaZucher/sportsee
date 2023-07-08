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
      <ResponsiveContainer>
        <BarChart data={activity}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" hide />
          <YAxis yAxisId="right" orientation="right" axisLine={false} />
          <Legend
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
