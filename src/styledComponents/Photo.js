import React from "react"
import styled from "styled-components"
import {NeonHeader} from "./StyledHeaders"
import {neonTheme} from "./themes"

const Image = styled.img`
    border-radius: 20px;
    box-shadow: 0px 30px 40px rgba(0,0,0,.1);
    margin-bottom: 60px;
`

const PhotoWindow =  styled.div`
    padding: 30px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    border-radius: 12px;
    box-shadow: ${props => props.selected ? neonTheme.default : `undefined`}
        ${props => props.noHover? `undefined`: `&:hover {
            box-shadow: ${neonTheme.default}
        }`}
   
`

const Photo = (props) => {
    return(
        <PhotoWindow {...props} >
            <NeonHeader>{props.name}</NeonHeader>
            <Image alt={props.name} src={props.image} />
        </PhotoWindow>
    )
}

export default Photo