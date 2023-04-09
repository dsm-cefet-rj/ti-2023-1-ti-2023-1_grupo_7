import '../styles/NavBar.css'
import { Inter } from 'next/font/google'
import { Link } from 'react-router-dom';
import Rotas from './routes';

const inter = Inter({ subsets: ['latin'] })
function NavBar(){
    return(
        <div className="grid">
        
          <Link to="/" className='card'><h2 className={inter.className}>Início</h2></Link>         
        
        
        
          <Link to="/acoes" className='card'><h2 className={inter.className}>Ações</h2></Link>
        

        
          <Link to="/fi" className='card'><h2 className={inter.className}>Fundos Imobiliários</h2></Link>
        

        
          <Link to="/rendafixa" className='card'><h2 className={inter.className}>Renda Fixa</h2></Link>
        

        
          <Link to="/proventos" className='card'><h2 className={inter.className}>Proventos</h2></Link>
        
      </div>
    )
}

export default NavBar;
