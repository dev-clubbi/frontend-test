import './App.css';

import React, { Component } from 'react'
import Actor from './Components/Actor';
import Films from './Components/Films';
import Location from './Components/Location';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1 className='fw-bold'>Clubbi</h1>
        <section>
          <Actor />
          <Films />
          <Location />
        </section>
      </div>
    )
  }
}
