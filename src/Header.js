import React from "react"
import styled from "styled-components"
import headerPic from './assets/rick-and-morty-transparent-background-11.png'
const HeaderImg = styled.img`
    width: 100%;
    display: flex;
    background-color:transparent
`
const AppHeader = () => {
    return (
        <div>
            <HeaderImg src={headerPic}/>
        </div>
    )
}

export default AppHeader