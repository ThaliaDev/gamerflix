import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/pagedefault';
import Formfield from '../../../componentes/Formfield';
import Button from '../../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setcategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  // setnomeCategoria = vai usar pra mudar
  // Filmes está sendo só um valor inicial

  function setValue(chave, valor) {
    // chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }
  const URL = window.location.hostname.includes('localhost') 
  ?'http://localhost:8080/categorias'
  :'https://gamerflix.herokuapp.com/categorias';
  fetch(URL)
    .then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setcategoria([
        ...resposta,
      ]);
    });
  /*    useEffect(() => {
      setTimeout(() => {
        setcategoria([
          ...categorias,
          {
            id: 1,
            nome: 'Jogos classicos',
            descricao: 'Jogos clássicos SNES para quem gosta de sentir aquela nostalgia',
            cor: '#FF4500',
          },
          {
            id: 2,
            nome: 'Terror',
            descricao: 'Jogos de terror, como sempre são emocionantes e dá aquele friozinho na barriga, confira.',
            cor: '#FF4500',
          },

        ]);
      }, 1 * 1000);
    }, []); */

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setcategoria([
          ...categorias, values,
        ]);

        setValue(valoresIniciais);
      }}
      >
        <Formfield
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <Formfield
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <Formfield
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {
      // Para fazer um loading
      categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )
      }
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
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
