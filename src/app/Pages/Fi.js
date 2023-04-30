import Home from './Home'

export default function Acoes(props) {
  return (
    <>
      <Home pagina='Fundo Imobiliário' db={props.db} setDB={props.setDB} ativos={props.ativos} setAtivos={props.setAtivos}/>
    </>
  )
}