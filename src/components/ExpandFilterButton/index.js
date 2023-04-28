import styled from 'styled-components';

const FilterButton = styled.button`
    display: none;
    position: absolute;
    bottom: 1em;
    left: 1em;

    cursor: pointer;
    border: 0;
    background-color: transparent;

    img {
        height: 150px;
    }

    :hover {
        transform: scale(1.1);
        transition-duration: 150ms;
    }

    :active {
        filter: brightness(120%);
    }

    @media (max-width: 680px) {
        display: block;
    }
`


export default function ExpandFilterButton() {
    return (
        <FilterButton onClick={expandSideBar}>
            <img
                src='../icons/logo-pokedex.svg'
                alt='Filter'>
            </img>
        </FilterButton>
    )
}

function expandSideBar(e) {
    e.preventDefault()
    const sideBar = document.getElementById("search-sidebar")

    if(sideBar.style.display === "none") {
        sideBar.style.display = "block"
    } else {
        sideBar.style.display = "none" 
    }
}