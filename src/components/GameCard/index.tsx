import React from 'react';
import {
    PlayButton,
    FavoriteButton,
    Container,
    Img,
    ButtonsContainer
} from './styles'
import { gameCardTypes } from '../../types/gameCardTypes'

const Index = ({
    freetogame_profile_url,
    id,
    short_description,
    thumbnail,
    addToFavorites
}: gameCardTypes) => {

    return (
        <Container key={id}>
            <Img src={thumbnail} />
            <ButtonsContainer>
                <PlayButton onClick={() => { window.open(freetogame_profile_url) }}>
                    Play
                    <p>{short_description}</p>
                </PlayButton>
                <FavoriteButton onClick={addToFavorites}>
                    Favorite
                    <p>{short_description}</p>
                </FavoriteButton>
            </ButtonsContainer>
        </Container>
    )
}

export default Index;