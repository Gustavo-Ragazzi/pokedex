import styled from 'styled-components';

let pokemon = require("../../../pokemon-list.json");
let pokeId = 5;

const Container = styled.div`
    display: flex;
    margin-top: 0.5em;

    p {
        color: white;
        font-size: 0.9em;
        padding: 0.1em;
    }
`
const TypeContainer = styled.div`
    height: auto;
    width: 4.5em;
    margin: auto;
    text-align: center;
    font-weight: bold;
    color: white;
    border-radius: 15px;
    background-color: ${props => typeColor(props.type)};
`

export default function PokeType() {
    return (
        <Container>
            {
                pokemon[pokeId].type.map((type) => (
                    <TypeContainer type={type}>
                        <p>{type}</p>
                    </TypeContainer>
                ))
            }
        </Container>
    )
}

function typeColor(type) {
    switch (type) {
        case "Normal":
            return "#A8A878";
        case "Fight":
            return "#C03028";
        case "Flying":
            return "#A890F0";
        case "Poison":
            return "#A040A0";
        case "Ground":
            return "#E0C068";
        case "Rock":
            return "#B8A038";
        case "Bug":
            return "#A8B820";
        case "Ghost":
            return "#705898";
        case "Steel":
            return "#B8B8D0";
        case "Fire":
            return "#F08030";
        case "Water":
            return "#6890F0";
        case "Grass":
            return "#78C850";
        case "Electric":
            return "#F8D030";
        case "Psychic":
            return "#F85888";
        case "Ice":
            return "#98D8D8";
        case "Dragon":
            return "#7038F8";
        case "Dark":
            return "#705848";
        case "Fairy":
            return "#EE99AC";
        default:
            return "white";
    }
}
