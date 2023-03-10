import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Logo from './components/Logo';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <Logo />
      <main>
        <Filters />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
