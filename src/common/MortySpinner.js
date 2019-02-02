import CharacterWindow from "../styles/СharacterWindow"
import Spinner from "../styles/Spinner"
import spinner from "../assets/morty-spinner.png"
import {Neon} from "../styles/StyledHeaders"
import React from "react"

const MortySpinner = () => {
    return (
        <CharacterWindow><Neon> Loading...</Neon>
                <Spinner src={spinner} alt="spinner" />
                </CharacterWindow>
    )
}

export default MortySpinner