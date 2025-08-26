import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import Company from './router/Company';
import Board from './router/Board';
import Hd from './laypout/Hd'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
        <Hd></Hd>

    </BrowserRouter>
  );
}

export default App;
