import React from "react"
import Photo from "../styledComponents/Photo";
import Button from "../styledComponents/Button"
import { Link } from "react-router-dom"
import "../App.css"
import CharacterWindow from "../styledComponents/СharacterWindow"
import Details from "./Details"


import { FlexRow } from "../styledComponents/FlexBoxes"

const CharacterPage = ({data, onSelectCharacter}) => {
    const { name = "", image = "", id = "" } = data
    return (<FlexRow>
        <CharacterWindow>
            <Button><Link to={"/photos"}>Back</Link></Button>
            <Photo selected name={name} image={image} />
        </CharacterWindow>
        <CharacterWindow>
            <Details {...data} />
            <Button topPadding onClick={onSelectCharacter(id)}>Select</Button></CharacterWindow>
    </FlexRow>)

}

export default CharacterPage