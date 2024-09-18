import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import CourseDetails from './pages/Course/CourseDetails'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course/:id' element={<CourseDetails />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
