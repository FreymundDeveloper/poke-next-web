import styles from '../styles/Home.module.css'

import Image from 'next/image';

import { Card } from '../components/Card';

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
    <>
        <div className={styles.title_container}>
            <h1 className={styles.title}><span>Web</span> Pokédex</h1>
            <Image src="/images/pokeball.png" width="50" height="50" alt="Poke-Next"/>
        </div>
        <div className={styles.pokemon_container}>
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    </>
  )
}
