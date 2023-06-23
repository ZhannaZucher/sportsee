import PropTypes from "prop-types"

export default function Card({ icon, alt, classModifier, value, type }) {
  return (
    <div className={"card-row" + classModifier}>
      <div className="card__icon">
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
