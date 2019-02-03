
import React from "react"
import {Neon} from "../styledComponents/StyledHeaders"
import {FlexRow} from "../styledComponents/FlexBoxes"

const Details = ({status, species, gender, origin, location}) => {
    const originString = origin.type==null ? "uknown" :`${origin.type} ${origin.name}(${origin.dimension})`
    const locationString = location.type==null ? "uknown" :`${location.type} ${location.name}(${location.dimension})`
    return (
        <div>
            <FlexRow >
                <Neon type={'detailHeader'} >Status:  </Neon><Neon type={'details'} variant={'red'}>{status}</Neon>
            </FlexRow>
            <FlexRow >
                <Neon type={'detailHeader'} >Specie:  </Neon><Neon type={'details'} variant={'red'}>{species}</Neon>
            </FlexRow>
            <FlexRow >
                <Neon type={'detailHeader'} >Gender:  </Neon><Neon type={'details'} variant={'red'}>{gender}</Neon>
            </FlexRow>
            <FlexRow >
                <Neon type={'detailHeader'} >Origin:  </Neon><Neon type={'details'} variant={'red'}>{originString}</Neon>
            </FlexRow>
            <FlexRow >
                <Neon type={'detailHeader'} >Location:  </Neon><Neon type={'details'} variant={'red'}>{locationString}</Neon>
            </FlexRow>
        </div>

    )
}

export default Details