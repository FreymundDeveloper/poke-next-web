import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    const maxPokemons = 251;
    const api = 'http://pokeapi.co/api/v2/pokemon/';

    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    data.results.forEach((item, index) => {
      item.id = index + 1
    });

    return {
      props: {
        pokemons: data.results,
      }
    }
}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}
