import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
