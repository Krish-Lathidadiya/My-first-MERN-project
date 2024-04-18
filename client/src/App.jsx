import React from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Error from './pages/Error';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App