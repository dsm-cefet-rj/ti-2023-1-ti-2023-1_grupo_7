import {React, useState} from "react";
import '../styles/ListaAtivos.css'
import { Inter } from 'next/font/google'
import { BsFillBarChartLineFill } from "react-icons/bs";

const inter = Inter({ subsets: ['latin'] })
const ListaAtivos = () => {

    const [nome,setNome] = useState("Ativos");
    
    function trocar(){
        setNome("Outra Coisa")
    }

    return(
        <div>
        <h2 class="titulo" className={inter.className}>
            Lista de {nome} <button onClick={trocar} style={{width: 20, height: 20, position: "absolute", right: 45}}/>
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