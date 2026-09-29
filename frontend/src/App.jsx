import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import RepliesPage from './pages/RepliesPage/RepliesPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [repliesLength, setRepliesLength] = useState()


  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage repliesLength={repliesLength} />} />
        <Route path='/replies' element={<RepliesPage setRepliesLength={setRepliesLength} />} />

      </Routes>

    </>
  )
}

export default App
