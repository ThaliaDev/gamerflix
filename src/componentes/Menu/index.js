import React from 'react';
import Logo from '../../assets/logo/Logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
//import Botao from './componentes/Botao';

function Menu(){

    return(
        <nav className="Menu">
            <Link to="/">
            <img className= "Logo" src = {Logo} alt= "GamerFlix Logo"/>
            </Link>

            <Button as={Link} className = "ButtonLink" to = "/cadastro/video" >
            Novo vídeo
            </Button>
        </nav>
    );

}

export default Menu; // Para conseguir importar em outros lugares.
