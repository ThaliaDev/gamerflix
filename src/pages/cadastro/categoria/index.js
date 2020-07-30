import React from 'react';
import PageDefault from '../../../componentes/pagedefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <Link to="/">
               Ir pra home
            </Link>
        </PageDefault>

    );
}
export default CadastroCategoria;