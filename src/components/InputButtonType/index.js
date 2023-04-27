import styled from 'styled-components';

const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5em;
    justify-items: center;
    justify-self: center;

    img {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 0.5em;
        border-radius: 90px;
    }

    @media (max-height: 650px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const DivContainer = styled.div `
    width: 64px;
    height: 64px;

    @media (max-height: 750px) {
        width: 48px;
        height: 48px;
    }

    @media (max-height: 650px) {

    }
`

const TypeButton = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;

    :hover {
        transform: scale(1.1);
        transition-duration: 150ms;
    }

    :active {
        filter: brightness(120%);
    }
`

export default function InputButtonType(props) {

    return (
        <Container>
            {
                props.types.map((type) => (
                    <DivContainer>
                        <TypeButton
                            id={type}
                        >
                        <img
                            src={"../icons/" + type + ".svg"}
                            alt={type + " Icon"}
                            style={{backgroundColor: typeColor(type)}}
                        ></img>
                        </TypeButton>
                    </DivContainer>
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