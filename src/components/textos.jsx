import PropTypes from "prop-types"
import "./Textos.css"

export function Textos(props) {
    return (
        <div className="texto">
            <h2>{props.tituloTexto}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

Textos.prototype = {
    tituloTexto: PropTypes.string,
    texto: PropTypes,
}