import React from 'react'
// node_modules 안에 있는 모듈호출
import hd from './hd.module.scss';
// 반드시 상대경로로 진행 src폴더 내의 소스

export default function Hd() {
  return (
    <div className={hd.hd}>Hd</div>
  )
}
