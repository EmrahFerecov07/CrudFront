import {  useState } from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from './components/Home'
import AddPage from './components/AddPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddPage/>}/>
      </Routes>
    </>
  )
}

export default App
