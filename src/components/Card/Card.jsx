import PropTypes from "prop-types"
import "./Card.css"

export default function Card({ icon, alt, value, type, unit }) {
  return (
    <div className="card-row">
      <div className="card__icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="card__description">
        <p className="card__value">{value + unit}</p>
        <p className="card__type">{type}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
}
