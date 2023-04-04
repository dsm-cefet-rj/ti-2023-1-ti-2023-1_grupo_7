import '../styles/NavBar.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
function NavBar(){
    return(
        <div className="grid">
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Início
          </h2>
        </a>

        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ações
          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Fundos Imobiliários
          </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Renda Fixa
          </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Proventos
          </h2>
        </a>
      </div>
    )
}

export default NavBar;