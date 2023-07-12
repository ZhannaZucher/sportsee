import PropTypes from "prop-types"
import "./CustomTooltipBarChart.css"

export default function CustomTooltipBarChart({ active, payload }) {
  return active && payload && payload.length ? (
    <div className="activity__tooltip">
      <div className="activity__tooltip-label">
        <p>{`${payload[0].value}Kcal`}</p>
        <p>{`${payload[1].value}kg`}</p>
      </div>
    </div>
  ) : null
}

CustomTooltipBarChart.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
