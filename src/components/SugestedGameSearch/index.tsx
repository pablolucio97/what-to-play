import React from 'react';
import {Container} from './styles'
import {gameCardTypes} from '../../types/gameCardTypes'


export default function SugestedGameSearch({
    id,
    title,
    thumbnail,
    freetogame_profile_url
 } : gameCardTypes){
    return(
        <Container key={id} onClick={() => {window.open(freetogame_profile_url)}}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
        </Container>
    )
}