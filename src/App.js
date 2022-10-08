import React from 'react';
import './App.css';
import Provider from './context/myProvider';
import StudioGhibli from './pages/StudioGhibli';

function App() {
  return (
    <Provider>
      <StudioGhibli />
    </Provider>
  );
}

export default App;
