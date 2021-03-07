import React from 'react';
import HeaderComponent from './components/header/header-component';
import MainComponent from './components/main/main';

import './App.css';

// ----------------------------------------------

function App() {
  return (
    <div className="App">
     <HeaderComponent/> 
     <MainComponent/>
    </div>
  );
}

export default App;
