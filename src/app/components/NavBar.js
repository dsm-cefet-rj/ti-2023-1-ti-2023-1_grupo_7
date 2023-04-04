import '../styles/NavBar.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
function NavBar(){
    return(
        <div className="grid">
        <a>
          <h2 className={inter.className}>
            Início
          </h2>
        </a>

        <a>
          <h2 className={inter.className}>
            Ações
          </h2>
        </a>

        <a>
          <h2 className={inter.className}>
            Fundos Imobiliários
          </h2>
        </a>

        <a>
          <h2 className={inter.className}>
            Renda Fixa
          </h2>
        </a>

        <a>
          <h2 className={inter.className}>
            Proventos
          </h2>
        </a>
      </div>
    )
}

export default NavBar;
