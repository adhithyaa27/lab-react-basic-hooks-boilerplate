import React from 'react';
import './App.css';
import Context from './Components/Context';
import Content from './Components/Content';

function App() {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default App;