import React from 'react'
import { useSelector } from 'react-redux';
import CardItem from './CardItem'

const Card = () => {
  const {product} = useSelector(state => state.items);

  return (
    <div className='flex flex-wrap justify-center items-center' >
      {product.map((item) => (
        <CardItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Card