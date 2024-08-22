import PropTypes from 'prop-types'
import './Contato.css'

export function Contato(props) {
    return (
        <div className='contatos'>
            <img src={props.img} alt={props.alt} />
            <p>{props.nome}</p>
        </div>
    )
}

Contato.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    nome: PropTypes.string,
};