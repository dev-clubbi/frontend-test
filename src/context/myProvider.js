import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../services/getApi';
import myContext from './myContext';

function Provider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const filmsList = async () => {
          const { data } = await getAPI();
          setData(data);
           // console.log(data);
        };
        filmsList();
      }, []);

  const valorDoContexto = {
    data,
  };

  return (
    <myContext.Provider value={ valorDoContexto }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Provider;
