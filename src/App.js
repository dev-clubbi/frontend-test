import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import './App.css';
import pages from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Films } />
      <Route exact path="/people" component={ pages.People } />
      <Route exact path="/location" component={ pages.Location } />
    </Switch>
  );
}

export default App;
