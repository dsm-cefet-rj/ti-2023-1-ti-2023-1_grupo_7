import '../styles/NavBar.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
function NavBar(props){
    return(
        <div className="grid">
        
          <div className='card' onClick={()=>{props.troca(undefined)}}><h2 className={inter.className}>Início</h2></div>         
        
          <div className='card' onClick={()=>{props.troca("Ação")}}><h2 className={inter.className}>Ações</h2></div>

          <div className='card' onClick={()=>{props.troca("Fundo Imobiliário")}}><h2 className={inter.className}>Fundos Imobiliários</h2></div>

          <div className='card' onClick={()=>{props.troca("Renda Fixa")}}><h2 className={inter.className}>Renda Fixa</h2></div>

          <div className='card' onClick={()=>{props.troca("Provento")}}><h2 className={inter.className}>Proventos</h2></div>
        
      </div>
    )
}

export default NavBar;
