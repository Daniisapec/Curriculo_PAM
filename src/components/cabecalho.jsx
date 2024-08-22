import './Cabecalho.css'

export function Cabecalho() {
    return (
        <div>
            <div className="info_prin">
                <div className="le-coluna">
                    <img src="https://i.scdn.co/image/ab67616100005174ba025c8f62612b2ca6bfa375" alt="Hatsune Miku desu" className='imgPerfil' />
                </div>
                <div className="ri-coluna">
                    <h1 class="nome_miku">Hatsune Miku</h1>
                    <h3 class="frase_miku"> "Sekai de ichiban ohime-sama" </h3>
                </div>
            </div>
        </div>
    )
}