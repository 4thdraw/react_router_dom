import React from 'react'
import { useParams } from 'react-router-dom'

export default function Company() {

  const { subpage } = useParams();
 
  return (
    <div>주소창에 뭐래??? 
      <h1>{ subpage == 'ceo' && 'CEO인사말' }</h1> 
      <p>
      { subpage == 'ceo' && <strong>안녕하세요 사장이에요~</strong>}
      { subpage == 'loaction' && <strong>카카오지도 나오게 해줘요</strong>}
      </p>
    
    </div>
  )
}
