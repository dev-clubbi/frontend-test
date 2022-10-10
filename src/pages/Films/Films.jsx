import React, { useContext } from 'react';
import FilmTable from './components/FilmTable';
import Header from '../../components/Header';
import myContext from '../../context/myContext';

function Films() {
  const { dataFilm } = useContext(myContext);
    return (
      <div>
        <Header props={ dataFilm }/>
        <FilmTable />
      </div>
    );
  }
  

export default Films