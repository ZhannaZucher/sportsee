import "./Error.css"

export default function Error() {
  return (
    <div id="error-content">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups! L'utilisateur que vous demandez n'existe pas.
      </h2>
    </div>
  )
}
