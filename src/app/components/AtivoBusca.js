import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const getId={
    "Renda Fixa": "rendaFixa",
    "Fundo Imobiliário":"fundoImobiliario",
    "Provento":"provento"
  }

function Ativo (props){
    return(
      <div className="ativoBusca" id={getId[props.data.tipo]} onClick={()=>{props.select()}}>
        <h2 className={inter.className} id='esquerda'>{props.data.nome}</h2>
        <h2 className={inter.className} id='direita'>R${props.data.valor}</h2>
      </div>
    )
}

export default Ativo;