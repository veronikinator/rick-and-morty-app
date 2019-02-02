import styled from "styled-components"
import { variant } from 'styled-system'

const headersStyle = variant({
  key: "headers"
});

export const NeonMainHeader = styled.h1`
font-size: 60px;
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
font-family: 'Press Start 2P';
color: #fff;
text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #9933ff, 0 0 30px #9933ff, 0 0 40px #9933ff, 0 0 55px #9933ff, 0 0 75px #9933ff;
text-align: center;
&:hover {
    color: #53f442;
    text-shadow: 0 0 5px #53f442, 0 0 10px #53f442, 0 0 20px #53f442, 0 0 30px #53f442, 0 0 40px #53f442, 0 0 55px #53f442, 0 0 75px #53f442;
}
@-webkit-keyframes neon {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
    }
  }
`

export const NeonHeader = styled.h3`
font-size: 30px;
font-family: 'Press Start 2P';
color: #fff;
text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #4dff4d, 0 0 30px #4dff4d, 0 0 40px #4dff4d, 0 0 55px #4dff4d, 0 0 75px #4dff4d;
text-align: center;
`

export const Neon = styled.div`
font-family: ${props => { switch(props.type){
  case "detailHeader": return 'VT323, monospace'
  case "details": return 'ZCOOL KuaiLe, cursive'
  default: return '"Press Start 2P"'
}}};
${props => props.type=='detailHeader' ? `font-size: 35px` : ``}
${props => props.type=='details' ? `max-width: 300px;` : ``}
${headersStyle}
`

Neon.defaultProps = {
  variant: "purple"
}

export const GameFont = styled.h1`
@keyframes pulse {
  0% {
    font-size:0.8em;
  }
  100% {
    font-size:1em;
  }
}
margin: 80px;
width:100%;
font-size:0.8em;
text-align: center;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
transition: all 0.5s;
color: #B6FF00;
  font-family: 'Press Start 2P';
  ${props => props.hoverable ?
    `&:hover {
      color: #53f442;
      text-shadow: 0 0 5px #53f442, 0 0 10px #53f442, 0 0 20px #53f442, 0 0 30px #53f442, 0 0 40px #53f442, 0 0 55px #53f442, 0 0 75px #53f442;
  }
  @-webkit-keyframes neon {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00;
      }
      to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00;
      }
    }`
    : ``}
  ${props => props.pulsating ? ` animation: pulse 2s infinite alternate;` : ``}
`

export default {NeonHeader, NeonMainHeader}