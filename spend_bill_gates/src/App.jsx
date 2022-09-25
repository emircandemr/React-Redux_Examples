import './App.css'
import CountUp from 'react-countup';
import Card from './components/Card';
import data from "./assets/data/data.json"

import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from './store/ItemSlice/ItemSlice';

function App() {

  const dispatch = useDispatch();
  const {defaultMoney,money} = useSelector(state => state.items);

  useEffect( () => {
    dispatch(getProducts(data.products))
  },[])


  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className='w-9/12 py-10 bg-[#212121]'>
        <div className='w-full flex flex-col justify-center items-center h-96  text-gray-300' >
          <h1 className='text-4xl text-center font-bold'>Spend Bill Gates Money ...</h1>
          <img className='w-96 mt-10 rounded-full ' src="https://static.dw.com/image/56977727_605.jpg" alt="billGates" />
        </div>
        <div className='w-full h-36 flex justify-center items-center sticky top-0 bg-[#181818]'>
              <h1 className='text-gray-300 text-5xl' >
              <CountUp
                start={defaultMoney}
                end={money}
                duration={1}
                prefix="$ "
                separator=","
                />
              </h1>
        </div>
        <Card/>
      </div>
      
    </div>
  )
}

export default App
