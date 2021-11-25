import React from 'react'
import {Container, Img} from './styles'
import {gameCardTypes} from '../../types/gameCardTypes'

const ImageGameCard = ({
    id,
    thumbnail
} : gameCardTypes) => {
    return (
        <Container key={id}>
            <Img src={thumbnail}/>
        </Container>
    )
}

export default ImageGameCard;