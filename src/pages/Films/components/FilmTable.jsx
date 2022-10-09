import React, { useState, useEffect } from 'react';
// import myContext from '../../../context/myContext';
import getAPI from '../../../services/getApi';

function FilmTable() {
  const [data, setData] = useState([]);
  // const [endpoint, setEndpoint ] = useState('films');

  useEffect(() => {
      const filmsList = async () => {
        const { data } = await getAPI('films');
        setData(data);
      };
      filmsList();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>  
          <th>Título</th>
          <th>Título Original</th>
          <th>Título Original Romanizado</th>
          <th>Descrição</th>
          <th>Diretor</th>
          <th>Produtor</th>
          <th>Data de Lançamento</th>
          <th>Duração</th>
          <th>Pontuação no RT</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({
          id,
          image,
          title,
          original_title: originalTitle,
          original_title_romanised: titleRomanised,
          description,
          director,
          producer,
          release_date: releaseDate,
          running_time: runningTime,
          rt_score: rtScore,
          url,
        }) => (
          <tr key={ id }>
            <td>
                <img src={image} alt='Pôster do Filme' height={200}/>
            </td>
            <td>{title}</td>
            <td>{originalTitle}</td>
            <td>{titleRomanised}</td>
            <td>{description}</td>
            <td>{director}</td>
            <td>{producer}</td>
            <td>{releaseDate}</td>
            <td>{runningTime}</td>
            <td>{rtScore}</td>
            <td>
              <a href={url}>URL</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FilmTable;