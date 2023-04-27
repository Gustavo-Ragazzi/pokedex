import styled from 'styled-components';
import PokeType from './Poke-Type';

const pokemonList = require("../../pokemon-list.json");

const Card = styled.div `
    flex-direction: column;
    height: 350px;
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
                                src={"/pokemon-images/" + threeInt(pokemon.id) + ".png"}
                                alt='Falha no carregamento'
                                width={250}
                                height={250}
                            />
                            <NameContainer>
                                <h2>{pokemon.name.english}</h2>
                                <p className='NameId'>#{pokemon.id}</p>
                            </NameContainer>
                            <PokeType pokemonType={pokemon.type}></PokeType> 
                        </Card>
                    ))
                }
            </>
        )
}

function threeInt(id) {
    if(id <= 9 && id >= 0) {
        return `00${id}`
    }
    if(id < 100) {
        return `0${id}`
    }
    else {
        return id
    }
}
