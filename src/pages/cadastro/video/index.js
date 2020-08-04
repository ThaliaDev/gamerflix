import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/Formfield';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import Button from '../../../componentes/Button';
import PageDefault from '../../../componentes/pagedefault';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Adicionar novo vídeo
        </Button>
      </form>

      <br />
      <br />

      <Button as={Link} className = "ButtonLink" to = "/cadastro/categoria">
        Criar nova categoria
      </Button>
      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
