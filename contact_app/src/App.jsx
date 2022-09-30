import './App.css'
import Contacts from './components/Contacts'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Edit from './components/Edit'

function App() {

  return (
    <div className="w-full h-screen bg-zinc-900  flex flex-col justify-center items-center">
      <div className='w-1/2 h-4/5 flex flex-col justify-start py-10 items-center rounded-xl shadow-2xl bg-[#1a1b1c] border border-gray-500' >
      <Router>
        <Routes>
          <Route exact path='/'  element={<Contacts />} />
          <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
      </Router>
      </div>
    </div>
  )
}

export default App
