import PropTypes from "prop-types"
import "./CustomTooltipSessions.css"

export default function CustomTooltipSessions({ active, payload }) {
  return active && payload && payload.length ? (
    <p className="sessions__tooltip-label">{`${payload[0].value} min`}</p>
  ) : null
}

CustomTooltipSessions.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
}
