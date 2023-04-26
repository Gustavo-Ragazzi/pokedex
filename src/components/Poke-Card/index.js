import styled from 'styled-components';
import PokeType from './Poke-Type';

let pokemonList = require("../../pokemon-list.json");
let pokeId = 5;

//pokemonList.map((pokemon, index) => console.log(pokemon.name.english))

const Card = styled.div `
    flex-direction: column;
    height: 360px;
    display: flex;
    background-color: lightgray;
    border-radius: 35px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    * {
        color: black;
    }

    h2, .NameId {
        margin: 0 1em;
        font-weight: bold;
    }
    
    img {
        padding: 0.5em;
    }

`

const NameContainer = styled.div `
    display: flex;
    justify-content: space-between;
`


export default function CardPokemon() {
    return (
            <>
                {
                    pokemonList.map((pokemon) => (
                        <Card>
                            <img 
                                src='/pokemon-images/006.png'
                                alt='Falha no carregamento'
                                width={250}
                                height={250}
                            />
                            <NameContainer>
                                <h2>{pokemon.name.english}</h2>
                                <p className='NameId'>#{pokemon.id}</p>
                            </NameContainer>
                            <PokeType></PokeType> 
                        </Card>
                    ))
                }
            </>
        )
}

