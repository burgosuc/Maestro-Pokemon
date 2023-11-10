import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import Detalles from './views/Detalles'
import './App.css'

export default function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} /> {/* PARA QUE NO QUEDE ACTIVO AL CAMBIAR A LA VISTA POKEMON */}
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/pokemon/:name' element={<Detalles />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
