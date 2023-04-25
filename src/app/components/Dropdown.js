import React, {useState} from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import '../styles/Dropdown.css';

function DropdownMenu() {
    const usuario = useLocation().state;
    const [isOpen,setIsOpen]=useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    function renderMenu(){
        if(isOpen){
            return(
            <ul>
                <Link to = '/conta' state={usuario}><li>Minha conta</li></Link>
                <Link to = '/relatorio' state={usuario}><li>Relatórios</li></Link>
                <Link to = '/listaCarteiras' state={usuario}><li>Carteiras</li></Link>
                <Link to='/'><li style={{color:'#A50F00'}}>Sair</li></Link>
            </ul>
            )
        }else{
            return(<div></div>)
        }
    }
    return(
        <div className='dropdown'>
            <button onClick={toggle} id='menuButton'>Menu</button>
            {renderMenu()}
        </div>
    );
}

export default DropdownMenu;