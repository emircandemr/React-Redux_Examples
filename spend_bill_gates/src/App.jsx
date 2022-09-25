import './App.css'
import CountUp from 'react-countup';
import Card from './assets/components/Card';

function App() {

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
                start={10000000}
                end={100000000}
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
