import PropTypes from "prop-types"
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Legend,
} from "recharts"
import "./ScoreChart.css"

export default function ScoreChart({ score }) {
  return (
    <div className="score">
      {/*<h3 className="score__legend">{score[0].name}</h3>*/}
      <div className="score__label">
        <span className="score__label-count">{score[0].uv + "%"}</span>
        <span className="score__label-text">de votre objectif</span>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          data={score}
          barSize={10}
          startAngle={210}
          endAngle={-330}
          innerRadius={100}
          outerRadius={75}
          margin={{ top: 24, left: 20, right: 20, bottom: 20 }}
        >
          <Legend iconSize={0} verticalAlign="top" align="left" />
          <PolarAngleAxis tick={false} type="number" domain={[0, 100]} />
          <RadialBar
            minAngle={15}
            dataKey="uv"
            clockWise={true}
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ScoreChart.propTypes = {
  score: PropTypes.array.isRequired,
}
