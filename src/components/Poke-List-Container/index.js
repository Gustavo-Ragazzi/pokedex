import styled from 'styled-components';
import CardPokemon from "../Poke-Card"

export default function PokemonList() {
    const PokeList = styled.div `
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: center;
        padding-left: 16.5em;
        margin: 2em 0;
    `
    return (
        <PokeList>
            <CardPokemon></CardPokemon>
        </PokeList>
    )
} 
