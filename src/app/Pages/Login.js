"use client"
import Login from "../components/form/LoginC";
import '../styles/Home.css'

export default function LogIn(props){
    return(
       <main className="main">
        <Login db={props.db} setDB={props.setDB}/>

       </main>
    )
}