import styled from 'styled-components';

const Search = styled.input `
    width: 300px;
    background-color: #332F27;
    border-radius: 10px;
    text-align: left;
    padding-left: 0.5em;

    input::placeholder {
        color: red;
        font-size: 0.3em;
    }
`

const SearchContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
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