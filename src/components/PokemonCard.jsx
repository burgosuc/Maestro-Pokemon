import '../App.css'
export default function PokemonCard ({ pokemon }) {
  return (
    <>
      <div className='pokeCard'>
        <img src={pokemon.src} alt='Imagen Pokemon' />

        <div className='detallesCard'>
          <div className='nombrepokemon'>Nombre: {pokemon.name}</div>
          <ul>
            <div>
              {pokemon.stats?.map((stat, i) => (
                <li key={i}>
                  {stat.name}:{stat.base}
                </li>
              ))}
            </div>
          </ul>
          <div className='tipoPokemon'>Tipo: {pokemon.types}</div>
        </div>
      </div>
    </>
  )
}
