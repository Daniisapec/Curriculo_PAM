import './App.css'
import { Cabecalho } from './components/cabecalho'
import { Contato } from './components/contato'
import { Textos } from './components/textos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho />
        <div className='contato'>
          
          <Contato img="https://64.media.tumblr.com/d7a464b39b35379544ea8a716dee32f4/a73b44429d00f24a-05/s400x600/444f31630bdd4c7ad4dee435cfe3ccbe42c5db36.pnj" alt="telefone" /> <p> 15 - 991651416 </p>
          <Contato img="https://64.media.tumblr.com/22eba5e903554532151e01d2d39ffae7/21a15285b76abcbb-e4/s400x600/dfe7a40d777dceea34f26596b40a30ae2792cc81.pnj" alt="email" /> <p>MikuHatsune01@gmail.com</p>
        </div>
        <Textos tituloTexto="OBJETIVO" texto="" />

        <Textos tituloTexto="FORMAÇÃO" texto="" />

        <Textos tituloTexto="MEUS PROJETOS" texto="" />
      </header>
    </div>
  )
}

export default App