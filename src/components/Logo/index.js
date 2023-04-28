import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em 0 0 0;

    @media (max-width: 650px) {
        #logo-icon {
            display: none;
        }
    }
`

export default function Logo() {
    return (
        <Container>
            <img src='../icons/logo-pokedex.svg' alt='Pokedéx Icon' id='logo-icon'></img>
            <h1>Pokedéx</h1>
        </Container>
    )
}