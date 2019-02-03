import CharacterWindow from "../styledComponents/СharacterWindow"
import Spinner from "../styledComponents/Spinner"
import spinner from "../assets/morty-spinner.png"
import {Neon} from "../styledComponents/StyledHeaders"
import React from "react"

const MortySpinner = () => {
    return (
        <CharacterWindow><Neon> Loading...</Neon>
                <Spinner src={spinner} alt="spinner" />
                </CharacterWindow>
    )
}

export default MortySpinner