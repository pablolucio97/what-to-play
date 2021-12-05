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
    addToFavorites
}: gameCardTypes) {
    return (
        <Container key={id}>
            <img src={thumbnail} alt={title} />
            <ButtonsContainer>
                <PlayButton onClick={() => { window.open(freetogame_profile_url) }}>
                <FiPlay
                            style={{marginRight: 8}}
                        />
                    Play
                </PlayButton>
                {show_favorite &&
                    <FavoriteButton onClick={addToFavorites}>
                        <FiHeart
                            style={{marginRight: 8}}
                        />
                        Favorite
                    </FavoriteButton>}
            </ButtonsContainer>
        </Container>
    )
}