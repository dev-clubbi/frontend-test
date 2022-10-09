import React, { useState, useEffect } from 'react';
// import myContext from '../../../context/myContext';
import getAPI from '../../../services/getApi';

function PeopleTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const peopleList = async () => {
        const { data } = await getAPI('people');
        setData(data);
      };
      peopleList();
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>  
          <th>Gênero</th>
          <th>Idade</th>
          <th>Cor do Olhos</th>
          <th>Cor do Cabelo</th>
          <th>Films</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({
          id,
          name,
          gender,
          age,
          eye_color: eyeColor,
          hair_color: hairColor,
          films,
          url,
        }) => (
          <tr key={ id }>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{eyeColor}</td>
            <td>{hairColor}</td>
            <td>{films[0]}</td>
            <td>
              <a href={url}>URL</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PeopleTable;