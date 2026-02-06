import React from 'react' 
import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage/Homepage'
import Navbar from './Navbar/Navbar'
import Admissionpage from './AdmissionPage/Admissionpage'
import Achievements from './Achievement/Achievement'
import Facilities from './Facilities/Facilities'
import Clubs from './Clubs/Clubs'
import Sign from './Sign/Sign'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/admissions' element={<Admissionpage />} />
        <Route path="/news" element={<Achievements />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='Sign' element={<Sign />} />
   
      </Routes> 
    </div>
  )
}

export default App
