import React, { useEffect, useContext } from 'react';
import getAPI from '../../../services/getApi';
import myContext from '../../../context/myContext'

function LocationTable() {
  const { dataLocation, setDataLocation, filter, dataFiltered } = useContext(myContext);
  // const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
      const locationList = async () => {
        const { data } = await getAPI('locations');
        setDataLocation(data);
        // setDataInfo(data);
      };
      locationList();
  }, []);

  const filtered = () => {
    const result = filter ? dataFiltered : dataLocation;  
  return result;
  };

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
        {filtered().map(({
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