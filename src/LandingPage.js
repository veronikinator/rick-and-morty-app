import React from "react"
import "./App.css"
import {Link} from "react-router-dom"
import {NeonMainHeader,GameFont} from "./styledComponents/StyledHeaders"
import gif from "./assets/landingPage.gif"
import { FlexColumn } from "./styledComponents/FlexBoxes";

const LandingPage = () => {
    return (
        <FlexColumn className="landing-page-header">
            <NeonMainHeader><Link to={"/photos"}>Rick and Morty</Link></NeonMainHeader>
            <GameFont><Link to={"/photos"}>Welcome to the Rick and Morty App!</Link></GameFont>
            <img src={gif} width="480" height="480" frameBorder="0"/>
        </FlexColumn>
    )
}

export default LandingPage