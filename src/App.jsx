import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Navbar from './Navbar/Navbar'
import Admissionpage from './AdmissionPage/Admissionpage'
import Achievements from './Achievement/Achievement'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admissions' element={<Admissionpage />} />
        <Route path='/achievements' element={<Achievements />} />
      </Routes>
    </div>
  )
}

export default App
