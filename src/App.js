import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import Company from './router/Company';
import Board from './router/Board';
import Hd from './layout/Hd'

import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  const { lang } = useParams();
  const currentLang = lang ? lang : 'kr';


  return (
    <BrowserRouter> 
        <Hd lang={currentLang} ></Hd>
        {
          console.log('현재언어', currentLang)
        }
        <Routes>          
          <Route path='/:lang' element={<Home></Home>}></Route>
          <Route path='/:lang/company/:subpage' element={<Company></Company>}></Route>
          <Route path='/:lang/board/:boardnm' element={<Board></Board>}></Route>
          <Route path='*' element={<p>주소창확인</p>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
