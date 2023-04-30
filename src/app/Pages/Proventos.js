import Home from './Home'

export default function Acoes(props) {
  return (
    <>
      <Home pagina='Provento'db={props.db} setDB={props.setDB} ativos={props.ativos}/>
    </>
  )
}