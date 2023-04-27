import styled from 'styled-components';
import Header from '../Header';
import CardPokemon from '../Poke-Card';

const pokemonFullList = require("../../pokemon-list.json")

const Container = styled.body`
`
const PokeList = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    padding-left: 16.5em;
    margin: 2em 0;
`

export default function MainContainer() {
    return (
        <Container>
            <Header></Header>
            <PokeList>
                <CardPokemon></CardPokemon>
            </PokeList>
        </Container>
    )
}