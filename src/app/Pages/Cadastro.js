"use client"
import '../styles/Home.css'
import CadastroC from "../components/form/CadastroC";

export default function Cadastro(props){
    return(
       <main className="main">
        <CadastroC db={props.db} setDB={props.setDB}/>

       </main>
    )
}