import React from 'react';
import { Container, FavoriteButton, PlayButton, ButtonsContainer } from './styles'
import { gameCardTypes } from '../../types/gameCardTypes'
import {FiHeart, FiPlay} from 'react-icons/fi'


export default function SugestedGameSearch({
    id,
    title,
    thumbnail,
    freetogame_profile_url,
    show_favorite,
    short_description
}: gameCardTypes) {
    return (
        <Container key={id}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <ButtonsContainer>
                <PlayButton onClick={() => { window.open(freetogame_profile_url) }}>
                <FiPlay
                            style={{marginRight: 8}}
                        />
                    Play
                    <p>{short_description}</p>
                </PlayButton>
                {show_favorite &&
                    <FavoriteButton onClick={() => { }}>
                        <FiHeart
                            style={{marginRight: 8}}
                        />
                        Favorite
                        <p>{short_description}</p>
                    </FavoriteButton>}
            </ButtonsContainer>
        </Container>
    )
}