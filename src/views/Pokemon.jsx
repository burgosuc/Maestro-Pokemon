import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'

export default function Pokemon () {
  const [pokemon, setPokemon] = useState([])
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('')
  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0'

  const obtenerPokemon = async () => {
    try {
      const res = await fetch(url)
      const { results } = await res.json()
      setPokemon(results)
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error)
    }
  }

  const handleVerPokemon = () => {
    if (pokemonSeleccionado) {
      navigate(`/pokemon/${pokemonSeleccionado}`)
    } else {
      window.alert('Por favor seleccione un Pokemon')
    }
  }

  useEffect(() => {
    obtenerPokemon()
  }, [])

  return (
    <>
      <div className='selection'>
        <h1>Seleccione un Pokemon</h1>
        <div className='selection-select'>
          <select
            value={pokemonSeleccionado}
            className='form-select text-center'
            onChange={(e) => setPokemonSeleccionado(e.target.value)}
          >
            <option className='option' value='disabled'>
              Pokemon
            </option>
            {pokemon.map(({ name }, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button onClick={handleVerPokemon} className='btnDetalle'>Ver detalles</Button>
        </div>
      </div>
    </>
  )
}
