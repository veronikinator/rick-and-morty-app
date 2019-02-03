import React from "react"
import { Link } from 'react-router-dom'
import Photo from "../styledComponents/Photo"
import styled from "styled-components"
import MortySpinner from "../common/MortySpinner.js";
import Header from "../Header"
import { GameFont } from "../styledComponents/StyledHeaders"
import { graphql } from 'react-apollo'

import gql from 'graphql-tag'
import { FlexRow, FlexColumn } from "../styledComponents/FlexBoxes";
import Button from "../styledComponents/Button";

export const GET_CHARACTER_LIST_QUERY = gql` 
query getCharacterList($page:Int) {
    characters(page: $page) {
      results {
          id,
        name,
        image
      }
  }}`

const StyledPhotoList = styled.div`
min-height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
flex-wrap: wrap;
`

const PhotoList = ({ page, data, onPrevClick, onNextClick }) => (
    data.loading ? <MortySpinner /> : <FlexColumn>
        <Link to={'/'}><Header /></Link>
        <GameFont pulsating>Choose your character</GameFont>
        <FlexRow>
            {page > 1 && <Button onClick={onPrevClick}>Prev</Button>}
            {page < 25 && <Button onClick={onNextClick}>Next</Button>}
        </FlexRow>

        <StyledPhotoList>{data.characters.results.map((character, i) =>
            <Link to={`photos/${character.id}`} >
                <Photo key={character.id} name={character.name} image={character.image} />
            </Link>)}</StyledPhotoList>
    </FlexColumn >
)

export default graphql(GET_CHARACTER_LIST_QUERY, {
    options: ({ page }) => ({ variables: { page } })
})(PhotoList)