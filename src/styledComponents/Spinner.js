import styled from "styled-components"

 const Spinner = styled.img`
    animation: spinner-spin infinite 20s linear;
    padding: 10px;
    height: 15vmin;
    margin:40px;

    @keyframes spinner-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`

export default Spinner