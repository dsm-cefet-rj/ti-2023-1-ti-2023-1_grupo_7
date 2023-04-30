import Home from './Home'

export default function Acoes(props) {
  return (
    <>
      <Home pagina='Renda Fixa' db={props.db} setDB={props.setDB} ativos={props.ativos}/>
    </>
  )
}