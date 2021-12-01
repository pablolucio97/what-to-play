import React, { FormEvent } from 'react';
import {
    PlayButton,
    FavoriteButton,
    Container,
    Img,
    ButtonsContainer
} from './styles'
import { gameCardTypes } from '../../types/gameCardTypes'
import { FiHeart, FiPlay } from 'react-icons/fi';

const Index = ({
    freetogame_profile_url,
    id,
    short_description,
    thumbnail,
    show_favorite,
    addToFavorites
}: gameCardTypes) => {
    return (
        <Container key={id}>
            <Img src={thumbnail} />
            <ButtonsContainer>
                <PlayButton onClick={() => { window.open(freetogame_profile_url) }}>
                    <FiPlay
                        style={{ marginRight: 8 }}
                    />
                    Play
                    <p>{short_description}</p>
                </PlayButton>
                {show_favorite &&
                    <FavoriteButton onClick={addToFavorites}>
                        <FiHeart
                            style={{ marginRight: 8 }}
                        />
                        Favorite
                        <p>{short_description}</p>
                    </FavoriteButton>
                }
            </ButtonsContainer>
        </Container>
    )
}

export default Index;