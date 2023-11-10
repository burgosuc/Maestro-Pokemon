import { Link } from 'react-router-dom'
import pikachuImg from '../assets/imgs/pikachu.png' // Importa la imagen correctamente
import '../App.css'

export default function Home () {
  return (
    <div className='pokemon-home'>
      <h1 className='titulo'>Bienvenido Maestro Pokemon</h1>
      <img src={pikachuImg} alt='Imagen principal APP' width='450' />
      <Link to='/Pokemon' className='linkToPokemon'>Ir a la lista Pokemones</Link>
    </div>
  )
}
