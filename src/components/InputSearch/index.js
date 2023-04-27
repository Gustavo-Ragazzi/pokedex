import styled from 'styled-components';
import { useState } from 'react';

const types = ["Bug", "Dragon", "Fairy", "Fire", "Ghost", "Ground", "Normal", "Psychic", "Steel", "Dark", "Electric", "Fighting", "Flying", "Grass", "Ice", "Poison", "Rock", "Water"]
const pokemonList = require("../../pokemon-list.json");

const Search = styled.input `
    width: 100%;
    background-color: #424549;
    border-radius: 10px;
    text-align: left;
    padding-left: 0.5em;
`

const SearchContainer = styled.div`

`

export default function InputSearch() {
    const [pokeSearch, setPokeSearch] = useState([])
    
    return (
        <SearchContainer>
            <Search 
                type="search"
                placeholder= "Pesquisa"
                onBlur={event => {
                    const inputText = event.target.value.toLowerCase()
                    const res = pokemonList.filter(pokemon => pokemon.name.english.toLowerCase().includes(inputText))
                    setPokeSearch(res)
                }}
            />
        </SearchContainer>
    )
}
