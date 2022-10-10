import './App.css';

import React, { Component } from 'react'
import Actor from './Components/Actor';
import Films from './Components/Films';
import Location from './Components/Location';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='actor' element={<Actor />} />
        <Route path='films' element={<Films />} />
        <Route path='location' element={<Location />} />
      </Routes>
    )
  }
}
