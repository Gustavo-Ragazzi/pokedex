import styled from 'styled-components';
import InputSearch from '../InputSearch';
import InputButtonType from '../InputButtonType';
import Logo from '../Logo';

const types = ["Bug", "Dragon", "Fairy", "Fire", "Ghost", "Ground", "Normal", "Psychic", "Steel", "Dark", "Electric", "Fighting", "Flying", "Grass", "Ice", "Poison", "Rock", "Water"]

const HeaderContainer = styled.header `
    position: fixed;
    background-color: #1E2124;
    height: 100vh;
`

const SearchForm = styled.form `
    display: flex;
    gap: 3vh;
    flex-direction: column;
    padding: 1em;
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <SearchForm>
                <InputSearch></InputSearch>
                <InputButtonType types={types}></InputButtonType>
            </SearchForm>
        </HeaderContainer>
    )
}