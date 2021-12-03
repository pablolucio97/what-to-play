import React from 'react';
import {
    ButtonDislike,
    Container,
    Img,
    GameTitle,
    ButtonPlay,
    SubContainer,
    ButtonsContainer,
    DescriptioContainer
} from './styles'
import { gameCardTypes } from '../../types/gameCardTypes'
import { RiDislikeLine } from 'react-icons/ri'

const Index = ({
    freetogame_profile_url,
    title,
    id,
    short_description,
    thumbnail,
    removeFromFavorites
}: gameCardTypes) => {
    return (
        <Container key={id}>
            <SubContainer>
                <Img src={thumbnail} />
            </SubContainer>
            <DescriptioContainer>
                <GameTitle>{title}</GameTitle>
                <p>{short_description}</p>
            </DescriptioContainer>
            <ButtonsContainer>
                <ButtonPlay onClick={() => { window.open(freetogame_profile_url) }}>
                    Play
                </ButtonPlay>
                <ButtonDislike onClick={removeFromFavorites}>
                    <RiDislikeLine />
                </ButtonDislike>
            </ButtonsContainer>
        </Container>
    )
}

export default Index;