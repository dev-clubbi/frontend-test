import React, { useState, useEffect } from 'react';
import getAPI from '../../../services/getApi';

function LocationTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const locationList = async () => {
        const { data } = await getAPI('locations');
        setData(data);
      };
      locationList();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>  
          <th>Clima</th>
          <th>Terreno</th>
          <th>Água de Superfície</th>
          <th>Moradores</th>
          <th>Filmes</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({
          id,
          name,
          climate,
          terrain,
          surface_water: surfaceWater,
          residents,
          films,
          url,
        }) => (
          <tr key={ id }>
            <td>{name}</td>
            <td>{climate}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{residents}</td>
            <td>{films}</td>
            <td>
              <a href={url}>URL</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LocationTable;