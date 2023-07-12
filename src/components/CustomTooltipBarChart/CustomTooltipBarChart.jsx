import PropTypes from "prop-types"
import "./CustomTooltipBarChart.css"

export default function CustomTooltipBarChart({ active, payload }) {
  return active && payload && payload.length ? (
    <div className="custom-tooltip">
      <div className="activity__tooltip-label">
        <p className="label">{`${payload[0].value}Kcal`}</p>
        <p className="label">{`${payload[1].value}kg`}</p>
      </div>
    </div>
  ) : null
}

CustomTooltipBarChart.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
