import React from 'react'
// node_modules 안에 있는 모듈호출
import hd from './hd.module.scss';
// 반드시 상대경로로 진행 src폴더 내의 소스
import { Link } from 'react-router-dom';
import navi from '../db/navi.json';


export default function Hd() {

  const lang = 'kr';

  return (
    <div className={hd.hd}>
      <ul className='d-flex gap-3'>
      {

       navi[lang]['navigation'].map((item, idx)=>{
        return (
          <li><Link  to={item.url} >{item.title}</Link></li>
        )
       })

      }  
      </ul> 
      <ul className="d-flex gap-2">
        <li><Link to="/kr">한국어</Link></li>
        <li><Link to="/en">영어</Link></li>       
      </ul>   
    </div>
  )
}
