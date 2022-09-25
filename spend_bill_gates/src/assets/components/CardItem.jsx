import React from 'react'

const CardItem = () => {
  return (
    <div className='w-96 h-96 p-3 flex flex-col justify-start items-center bg-[#181818] m-10'>
        <img className='w-full' src='https://www.tarifkulubu.com/wp-content/uploads/2021/05/Big-mac-tarifi-sosyorol.com-1.jpg'/>
        <h3 className='text-gray-300 mt-2' >Big Mac</h3>
        <p className='text-gray-300 mt-2 mb-5' >Price</p>
        <div>
            <button className=' px-5 py-1 bg-[#212121] text-gray-300'>Buy</button>
            <input className='w-24 mx-5 text-center' value="5" />
            <button className=' px-5 py-1 bg-[#212121] text-gray-300' >Sell</button>
        </div>
    </div>
  )
}

export default CardItem