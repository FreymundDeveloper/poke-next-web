import Image from "next/image";

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = 'http://pokeapi.co/api/v2/pokemon/';

    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    });

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId;

    const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return {
        props: { pokemon: data }
    };
}

export const Pokemon = ({ pokemon }) => {
    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="120" height="120" alt={pokemon.name}/>
            <div>
                <h3>Number: </h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Type: </h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                            {item.type.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Height: </h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Weight: </h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon