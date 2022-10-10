import React, { useContext, useEffect } from 'react';
import myContext from '../../../context/myContext';
import getAPI from '../../../services/getApi';
import { Table } from 'reactstrap';

function PeopleTable() {
  const { dataPeople, setDataPeople, filter, dataFiltered } = useContext(myContext);

  useEffect(() => {
      const peopleList = async () => {
        const { data } = await getAPI('people');
        setDataPeople(data);
      };
      peopleList();
  }, []);

  const filtered = () => {
    const result = filter ? dataFiltered : dataPeople;  
  console.log(dataPeople);
  return result;
  };

  return (
    <Table striped bordered size="sm">
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
        {filtered().map(({
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
            <td>{films}</td>
            <td>
              <a href={url}>URL</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PeopleTable;