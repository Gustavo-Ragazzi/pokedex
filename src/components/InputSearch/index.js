import styled from 'styled-components';

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
    return (
        <SearchContainer>
            <Search 
                type="search"
                placeholder= "Pesquisa"
            />
        </SearchContainer>
    )
}