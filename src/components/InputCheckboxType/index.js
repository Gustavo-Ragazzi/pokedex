import styled from 'styled-components';

const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
`

const TypeButton = styled.input`
    display: none;
`

const LabelContainer = styled.label `
    display: flex;
    padding: 0.5em;
    margin: 0.5em;
    width: 64px;
    height: 64px;
    border-radius: 90px;

    @media (max-height: 950px) {
        margin: 0.15em 0.5em;
    } 
`



export default function InputCheckboxType(props) {

    return (
        <Container>
            {
                props.types.map((type) => (
                    <LabelContainer 
                        id={type}
                        name={type}
                        style={{background: typeColor(type)}}
                    >
                        <img 
                            src={"../icons/" + type + ".svg"}
                            alt={type + " Icon"}
                        />

                        <TypeButton
                            type='checkbox' 
                            id={type}
                        />
                    </LabelContainer>
                    ))
            }
        </Container>
    )
}

function typeColor(type) {
    switch (type) {
        case "Normal":
            return "#A8A878";
        case "Fighting":
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