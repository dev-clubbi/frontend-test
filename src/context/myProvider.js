import React from 'react';
import PropTypes from 'prop-types';
// import getAPI from '../services/getApi';
import myContext from './myContext';

function Provider({ children }) {


  const valorDoContexto = {

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
