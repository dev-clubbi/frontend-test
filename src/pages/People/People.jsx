import React, { useContext } from 'react';
import PeopleTable from './components/PeopleTable';
import Header from '../../components/Header';
import myContext from '../../context/myContext';

function People() {
  const { dataPeople } = useContext(myContext);
    return (
      <div>
        <Header props={ dataPeople } />
        <PeopleTable />
      </div>
    );
  }
  

export default People;