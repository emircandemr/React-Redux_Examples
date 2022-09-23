import React from 'react'
import { Link } from 'react-router-dom'
import "./Characters.scss"

const Character = ({img,alt,text,id}) => {
  return (
    <div className='characters' >
      <Link to={`/detail/${id}`} >
        <img className='characters__img' src={img} alt={alt}/>
        <div className='characters__name' > {text} </div>
      </Link>
    </div>
  )
}

export default Character