import styled from 'styled-components';
import PokeType from './Poke-Type';
import { useContext } from 'react';
import { MyPokemonList } from '../MainContainer';

const Card = styled.div `
    flex-direction: column;
    height: 350px;
    display: flex;
    background-color: lightgray;
    border-radius: 35px;
    margin: 1em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    * {
        color: black;
    }

    h2, .NameClass {
        font-weight: bold;
    }
    
    img {
        padding: 0.5em;
    }

`

const NameContainer = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`

const PokeList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 356px;

    @media (max-width: 680px) {
        padding-left: 0;
    }
`

export default function CardPokemon() {
    const { pokemonFiltedList, setPokemonFiltedList } = useContext(MyPokemonList)

    return (
            <PokeList key={"PokeList"}>
                {
                    pokemonFiltedList.map((pokemon, index) => (
                        
                        <Card id={"CardDiv" + pokemon} key={"Card" + pokemon + index}>
                            <img 
                                src={"/pokemon-images/" + threeInt(pokemon.id) + ".png"}
                                alt='Falha no carregamento'
                                width={250}
                                height={250}
                                key={"CardImg" + pokemon}
                            />
                            <NameContainer id={"NameContainer" + pokemon}>
                                <h2>{pokemon.name.english}</h2>
                                <p className='NameClass'>#{pokemon.id}</p>
                            </NameContainer>
                            <PokeType pokemonType={pokemon.type} key={"PokeType" + pokemon.id}></PokeType> 
                        </Card>
                    ))
                }
            </PokeList>
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
