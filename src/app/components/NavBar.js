import '../styles/NavBar.css'
import { Inter } from 'next/font/google'
import { Link } from 'react-router-dom';
import Rotas from './routes';
import { useLocation } from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })
function NavBar(){
  const usuario = useLocation().state;
    return(
        <div className="grid">
        
          <Link to="/inicio" className='card' state={usuario}><h2 className={inter.className}>Início</h2></Link>         
        
        
        
          <Link to="/acoes" className='card' state={usuario}><h2 className={inter.className}>Ações</h2></Link>
        

        
          <Link to="/fi" className='card' state={usuario}><h2 className={inter.className}>Fundos Imobiliários</h2></Link>
        

        
          <Link to="/rendafixa" className='card' state={usuario}><h2 className={inter.className}>Renda Fixa</h2></Link>
        

        
          <Link to="/proventos" className='card' state={usuario}><h2 className={inter.className}>Proventos</h2></Link>
        
      </div>
    )
}

export default NavBar;
