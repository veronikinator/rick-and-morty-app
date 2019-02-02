import React from "react"
import CharacterList from "./CharacterList";
import { AppContext } from "../App"

const PhotoContainer = () => (
    <AppContext.Consumer>
        {({ page, previousPage, nextPage }) =>
            <CharacterList page={page} onNextClick={() => nextPage()} onPrevClick={() => previousPage()} />}
    </AppContext.Consumer>
)

export default PhotoContainer