import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';

function DropdownMenu() {
    const [isOpen,setIsOpen]=useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    function renderMenu(){
        if(isOpen){
            return(
            <ul>
                <Link to = '/conta'><li>Minha conta</li></Link>
                <Link to = '/relatorio'><li>Relatórios</li></Link>
                <Link to = '/listaCarteiras'><li>Carteiras</li></Link>
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