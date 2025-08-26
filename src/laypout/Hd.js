import React from 'react'
// node_modules 안에 있는 모듈호출
import hd from './hd.module.scss';
// 반드시 상대경로로 진행 src폴더 내의 소스
import { Link } from 'react-router-dom';

export default function Hd() {
  return (
    <div className={hd.hd}>
      {/* Link 컴포넌트는 번들이 끝나면 a 변환된다. 주소창에 주소를 변경하게 된다. */}
      <Link to="/">로고</Link>
      <Link to="/company">회사소개</Link>
      <Link to="/board">게시판</Link>
      <Link to="/login">로그인</Link>
      <a href="/">서버괴롭힘</a>
    </div>
  )
}
