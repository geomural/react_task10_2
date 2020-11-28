import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
import './App.css';

function App() {
  return (
    <div>
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
      <hr />
    </div>
  );
}

export default App;
