import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Navbar from './Navbar/Navbar'
import Admissionpage from './AdmissionPage/Admissionpage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admissions' element={<Admissionpage />} />
      </Routes>
    </div>
  )
}

export default App
