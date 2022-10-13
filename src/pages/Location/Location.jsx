import React, { useContext } from 'react';
import LocationTable from './components/LocationTable';
import Header from '../../components/Header';
import myContext from '../../context/myContext';

function Location() {
  const { dataLocation } = useContext(myContext);
    return (
      <div>
        <Header props={ dataLocation }/>
        <LocationTable />
      </div>
    );
  }
  

export default Location;