import React from "react";
import '../styles/ListaAtivos.css'
import { Inter } from 'next/font/google'
import { BsFillBarChartLineFill } from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] })
const ListaAtivos = () => {
    return(
        <div>
        <h2 class="titulo" className={inter.className}>
            Lista de Ativos
        </h2>
        
        <div class="ativo">
            <div class="estrutura">
             <BsFillBarChartLineFill className="logo"/>
            </div>
            <div>
               
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </div>
    </div>

    )
}

export default ListaAtivos;