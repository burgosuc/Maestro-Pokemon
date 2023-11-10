import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import pikachuImg from '../assets/imgs/Location_icon.png' // Importa la imagen correctamente
import '../App.css'

const PokeNavbar = () => {
  return (
    <Navbar className='navBar'>
      <Navbar.Brand>
        <img src={pikachuImg} width='50px' alt='Pikachu' />
      </Navbar.Brand>

      <div className='d-flex links'>
        <NavLink className='nav-link' activeClassName='active' to='/home'>
          Home
        </NavLink>
        {' - '}
        <NavLink className='nav-link' activeClassName='active' to='/Pokemon'>
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  )
}

export default PokeNavbar
