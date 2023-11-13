import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import pikachuImg from '../assets/imgs/Location_icon.png'
import '../App.css'

const PokeNavbar = () => {
  const setActive = ({ isActive }) => (isActive ? 'm-3 active' : 'm-3')
  return (
    <Navbar className='d-flex justify-content-between px-5' variant='light' style={{ background: '#58585A' }}>
      <Navbar.Brand>
        <img width='50' src={pikachuImg} alt='imagen pokemon' />
      </Navbar.Brand>
      <div>
        <NavLink className={setActive} to='/'>Home</NavLink>
        <NavLink className={setActive} to='/pokemon'>Pokemones</NavLink>
      </div>
    </Navbar>
  )
}

export default PokeNavbar
