import { useEffect } from 'react'
import './App.css'
import useGetImages from './hooks/useGetImages'


function App() {
  
  const images = useGetImages()
  console.log({images})

  return (
    <div className="App">
      
    </div>
  )
}

export default App
