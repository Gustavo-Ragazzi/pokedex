import styled from 'styled-components';
import Header from '../Header';
import CardPokemon from '../Poke-Card';
import { createContext, useState } from 'react';

export const MyPokemonList = createContext()

const pokemonFullList = require("../../pokemon-list.json")

export default function MainContainer() {
    const [pokemonFiltedList, setPokemonFiltedList] = useState(pokemonFullList)

    return (
        <MyPokemonList.Provider value={{ pokemonFiltedList, setPokemonFiltedList }}>
            <Header></Header>
            <CardPokemon></CardPokemon>
        </MyPokemonList.Provider>
    )
}