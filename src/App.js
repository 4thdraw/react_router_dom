import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import Company from './router/Company';
import Board from './router/Board';
import Hd from './layout/Hd'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
        <Hd></Hd>
        <Routes>          
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/company/:subpage' element={<Company></Company>}></Route>
          <Route path='/board/:boardnm' element={<Board></Board>}></Route>
          <Route path='*' element={<p>주소창확인</p>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
