import styled from 'styled-components';
import { MyPokemonList } from '../MainContainer';
import { useContext } from 'react';

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

    @media (max-height: 680px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const DivContainer = styled.div `
    width: 64px;
    height: 64px;

    @media (max-height: 780px) {
        width: 48px;
        height: 48px;
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
const pokemonFullList = require("../../pokemon-list.json")

export default function InputButtonType(props) {
    const { pokemonFiltedList, setPokemonFiltedList } = useContext(MyPokemonList);

    return (
        <Container>
            {
                props.types.map((type) => (
                    <DivContainer key={"Div"+type}>
                        <TypeButton
                            id={type}
                            key={"Filter" + type}
                            onClick={e => {
                                e.preventDefault()
                                changeColor(type)
                                setPokemonFiltedList(filterUpdate(type))
                            }}
                        >
                        <img
                            id={"Img" + type}
                            key={"Img" + type}
                            data-type={"ImgTypeBackground"}
                            src={"../icons/" + type.toLowerCase() + ".svg"}
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

function changeColor(type) {
    const img = document.querySelector("#Img" + type)
    const imgBackgroundColor = img.style.backgroundColor
    
    if(imgBackgroundColor === "gray") {
        img.style.backgroundColor = typeColor(type)
    } else {
        img.style.backgroundColor = "gray"
    }
}

export function filterUpdate() {
    const filterList = boxCheckedList()
    const res = pokemonFullList.filter(pokemon => filterList.some(type => pokemon.type.includes(type)))
    return res
}

function boxCheckedList() {
    const buttonCheckedList = document.querySelectorAll('[data-type="ImgTypeBackground"]')
    const list = Array.from(buttonCheckedList)
    const filteredList = list.filter(type => type.style.backgroundColor !== "gray")
    const filteredIds = filteredList.map((type) => type.id)
    const filteredTypes = filteredIds.map((id) => id.slice(3))

    return filteredTypes
}