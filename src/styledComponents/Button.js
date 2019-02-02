import styled from 'styled-components'

const Button = styled.button`
    padding: 14px 40px;
    border-radius: 8px;
    background-color: #0000;
    border-color: transparent;
    color: white;
    font-family: 'Press Start 2P';
    font-size: 20px;
    ${props => props.topPadding ? `    margin-top: 18px;` : ``}
    &:hover {
        box-shadow:
        inset 0 0 50px #000,      /* inner white */
        inset 20px 0 80px #f0f,   /* inner left magenta short */
        inset -20px 0 80px #0ff,  /* inner right cyan short */
        inset 20px 0 300px #f0f,  /* inner left magenta broad */
        inset -20px 0 300px #0ff, /* inner right cyan broad */
        0 0 50px #000,            /* outer white */
        -10px 0 80px #f0f,        /* outer left magenta */
        10px 0 80px #0ff; 
    }
    `
export default Button