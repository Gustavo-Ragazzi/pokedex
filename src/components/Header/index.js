import styled from 'styled-components';
import InputSearch from '../InputSearch';
import InputButtonType from '../InputButtonType';
import Logo from '../Logo';
import ExpandFilterButton from '../ExpandFilterButton';

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

const SearchBarContainer = styled.aside `
    @media (max-width: 650px) {
        display: none;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <ExpandFilterButton/>
            <SearchBarContainer id='search-sidebar' style={{display: displayType()}}>
                <Logo></Logo>
                <SearchForm>
                    <InputSearch></InputSearch>
                    <InputButtonType types={types}></InputButtonType>
                </SearchForm>
            </SearchBarContainer>
        </HeaderContainer>
    )
}

function displayType() {
    const screenWidth = window.innerWidth
    console.log(screenWidth)

    if (screenWidth > 680) {
        console.log("maior ou igual")
        return "block"
    } else {
        console.log("menor")
        return "none"
    }
}