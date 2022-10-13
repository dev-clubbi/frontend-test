import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataPeople, setDataPeople] = useState([]);
  const [dataLocation, setDataLocation] = useState([]);
  const [filter, setFilter] = useState(false);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const valorDoContexto = {
    inputValue,
    setInputValue,
    dataFilm,
    setDataFilm,
    dataPeople,
    setDataPeople,
    dataLocation,
    setDataLocation,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered
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
