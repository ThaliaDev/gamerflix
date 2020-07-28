import React from 'react';
import Logo from '../../assets/logo/Logo.png';
import './Menu.css';
import Button from '../Button';
//import Botao from './componentes/Botao';

function Menu(){

    return(
        <nav className="Menu">
            <a href="/">
            <img className= "Logo" src = {Logo} alt= "GamerFlix Logo"/>
            </a>

            <Button as="a" className = "ButtonLink" href = "/" >
            Novo vídeo
            </Button>
        </nav>
    );

}

export default Menu; // Para conseguir importar em outros lugares.
