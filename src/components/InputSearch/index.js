import styled from 'styled-components';
import { useContext, useState } from 'react';
import { MyPokemonList } from '../MainContainer';
import { filterUpdate } from '../InputButtonType';

const Search = styled.input `
    width: 100%;
    background-color: #424549;
    border-radius: 10px;
    text-align: left;
    padding-left: 0.5em;
`

const SearchContainer = styled.div``

export default function InputSearch() {
    const { pokemonFiltedList, setPokemonFiltedList } = useContext(MyPokemonList);
    const [ inputText, setInputText ] = useState("")
    
    return (
        <SearchContainer>
            <Search 
                type="search"
                placeholder= "Pesquisa"
                value={inputText}
                onBlur={() => {
                    setInputText("")
                    setPokemonFiltedList(inputSearch(inputText, pokemonFiltedList))
                }}
                onChange={event => {
                    setInputText(event.target.value)
                }}
            />
        </SearchContainer>
    )
}

function inputSearch(inputText) {
    const filteredList = filterUpdate()

    if(inputText === "") {
        return filteredList
    } else {
        return filteredList.filter((pokemon) => pokemon.name.english.toLowerCase().includes(inputText.toLowerCase()))
    }
}