import styled from 'styled-components';
import InputSearch from '../InputSearch';
import InputCheckboxType from '../InputCheckboxType';

const types = ["Bug", "Dragon", "Fairy", "Fire", "Ghost", "Ground", "Normal", "Psychic", "Steel", "Dark", "Electric", "Fighting", "Flying", "Grass", "Ice", "Poison", "Rock", "Water"]

const HeaderContainer = styled.header `
    position: fixed;
    background-color: #1E2124;
    height: 100vh;
`

const SearchForm = styled.form `
    display: flex;
    gap: 20vh;
    flex-direction: column;
    padding: 1em;
`

export default function Header() {
    return (
        <HeaderContainer>
            <SearchForm>
                <InputSearch></InputSearch>
                <InputCheckboxType types={types}></InputCheckboxType>
                <input type="submit" style={{display: "none"}}></input>
            </SearchForm>
        </HeaderContainer>
    )
}