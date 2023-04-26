import styled from 'styled-components';
import CardPokemon from '../Poke-Card';

export default function PokemonList() {
    const PokeList = styled.div `
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        margin: auto 2em;
    `
    return (
        <PokeList>
            <CardPokemon></CardPokemon>
        </PokeList>
    )
} 
