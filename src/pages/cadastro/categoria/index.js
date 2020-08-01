import React , {useState}from 'react';
import PageDefault from '../../../componentes/pagedefault';
import { Link } from 'react-router-dom';
import Formfield from '../../../componentes/Formfield';


function CadastroCategoria(){
    const valoresIniciais={
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias,setcategoria]=useState([]);
    const [values,setValues] = useState(valoresIniciais);
    //setnomeCategoria = vai usar pra mudar 
    //Filmes está sendo só um valor inicial

    function setValue(chave,valor){
        //chave: nome, descricao
        setValues({
            ...values,
            [chave]:valor,
        })
    }

    function handleChange(info){
        
        setValue(
            info.target.getAttribute('name'),
            info.target.value,
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form  onSubmit={function handleSubmit(info){
                info.preventDefault();
                setcategoria([
                    ...categorias,values
                ]);
            
            setValue(valoresIniciais)
             }} >
                <Formfield
                label = "Nome da Categoria:"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                />
                <Formfield
                label = "Descrição:"
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
                />
                <Formfield
                label = "Cor:"
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
             {categorias.map((categoria,indice) => (
             <li key={`${categoria}${indice}`}>
                 {categoria.nome}
             </li>
             ))}
            </ul>
            <Link to="/">
               Ir pra home
            </Link>
        </PageDefault>

    );
}
export default CadastroCategoria;