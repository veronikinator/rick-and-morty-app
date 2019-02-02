import styled from "styled-components"

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export default { FlexRow, FlexColumn }