import { useEffect } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Settings from './components/Settings/Settings'
import useGetImages from './hooks/useGetImages'


function App() {
  
  const images = useGetImages()
  console.log({images})

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Background/>
      <Settings/>
    </div>
  )
}

export default App
