import PropTypes from "prop-types"
import "./Card.css"

export default function Card({ icon, alt, classModifier, value, type }) {
  return (
    <div className="card-row">
      <div className={"card__icon" + classModifier}>
        <img src={icon} alt={alt} />
      </div>
      <div className="card__description">
        <p className="card__value">{value}</p>
        <p className="card__type">{type}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  classModifier: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
}
