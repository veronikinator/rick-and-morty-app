import React from "react"
import { withRouter } from "react-router-dom"
import "../App.css"
import MortySpinner from "../common/MortySpinner";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import CharacterPage from "./CharacterPage"
import { AppContext } from '../App'

const CharacterPageWrapper = ({ characterData }) => (

    characterData.loading ?
        <MortySpinner /> :
        <AppContext.Consumer>{({ onSelectCharacter }) =>
            <CharacterPage data={characterData.character} onSelectCharacter={(id) => onSelectCharacter(id)} />
        }</AppContext.Consumer>
)

const GET_CHARACTER_DETAIL_QUERY = gql`query getCharacter($id: ID) {
    character(id: $id) {
        name,
      image,
      id,
      status,
      species,
    gender,
    origin{
        type, name, 
        dimension
    },
    location{
        type, name, 
        dimension
    }
    }
  }`

export default graphql(GET_CHARACTER_DETAIL_QUERY, {
    name: "characterData",
    options: ({ match }) => ({ variables: { id: match.params.id } })
})(withRouter(CharacterPageWrapper))