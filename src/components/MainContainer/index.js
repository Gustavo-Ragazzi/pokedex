import Header from '../Header';
import CardPokemon from '../Poke-Card';
import { createContext, useState } from 'react';

export const MyPokemonList = createContext()
export const MyPokemonTypeList = createContext()

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