import React from 'react'
import {changeProduct} from '../store/ItemSlice/ItemSlice';
import {useDispatch} from 'react-redux';

const CardItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <div className='w-96 h-96 p-3 flex flex-col justify-start items-center bg-[#181818] m-10'>
        <img className='w-60 h-52' src={item.image}/>
        <h3 className='text-gray-300 mt-2' >{item.productName}</h3>
        <p className='text-gray-300 mt-2 mb-5' > ${item.productPrice}</p>
        <div>
            <button className=' px-5 py-1 bg-[#212121] text-gray-300' onClick={() => {dispatch(changeProduct({id : item.id , count : Number(item.count+1)}))}} >Buy</button>
            <input className='w-24 mx-5 text-center' value={item.count} onChange={(e) => {dispatch(changeProduct({id : item.id , count : Number(e.target.value )}))}} />
            <button className=' px-5 py-1 bg-[#212121] text-gray-300' onClick={() => {dispatch(changeProduct({id : item.id , count : Number(item.count - 1)}))}} >Sell</button>
        </div>
    </div>
  )
}

export default CardItem