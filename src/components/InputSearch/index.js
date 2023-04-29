import styled from 'styled-components';
import { useContext, useState } from 'react';
import { MyPokemonList } from '../MainContainer';
import { filterUpdate } from '../InputButtonType';
import { AiOutlineSearch } from "react-icons/ai";

const Search = styled.input `
    width: 1fr;
    height: 100%;
    background-color: #424549;
    border-radius: 10px 0 0 10px;
    text-align: left;
    padding-left: 0.5em;
    border-style: none;
`

const ButtonSubmit = styled.button `
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1.5em;
    background-color: #7289da;
    border: none;

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        filter: brightness(0.8);
    }
`

const SearchContainer = styled.div`
    display: flex;
    height: 1.5em;
`

export default function InputSearch() {
    const { pokemonFiltedList, setPokemonFiltedList } = useContext(MyPokemonList);
    const [ inputText, setInputText ] = useState("")
    
    return (
        <SearchContainer>
            <Search 
                type="search"
                placeholder= "Pesquisa"
                value={inputText}
                onChange={event => {
                    setInputText(event.target.value)
                }}
            />
            <ButtonSubmit
                type='submit'
                onClick={(e) => {
                    e.preventDefault()
                    setPokemonFiltedList(buttonSubmit(inputText, pokemonFiltedList))
                }}
            >
                <AiOutlineSearch/>
            </ButtonSubmit>
        </SearchContainer>
    )
}

function buttonSubmit(inputText, pokemonFiltedList) {
    if(inputText === "") {
        return pokemonFiltedList;
    } else {
        return pokemonFiltedList.filter((pokemon) => pokemon.name.english.toLowerCase().includes(inputText.toLowerCase()))
    }
}

