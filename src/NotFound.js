import React from "react"
import falcon from "./assets/falconpng.png"
import {FlexColumn} from './styles/FlexBoxes'
import {Link} from "react-router-dom"
import {GameFont} from "./styles/StyledHeaders"
import styled from "styled-components"

const ShakeIt = styled.img`
    animation: shake 0.5s; 
  animation-iteration-count: infinite;
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
  
  `

const NotFoundPage = ()=> (
    <FlexColumn className="landing-page-header">
            <GameFont hoverable><Link to={"/"}>Whoops! Seems like we can't find your page</Link></GameFont>
            <Link to={"/"}><ShakeIt src={falcon} height="380" frameBorder="0"/></Link>
        </FlexColumn>
)

export default NotFoundPage