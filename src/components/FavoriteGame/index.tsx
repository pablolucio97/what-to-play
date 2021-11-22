import {
    ButtonDislike,
    Container,
    Img,
    GameTitle,
    ButtonPlay,
    SubContainer,
    ButtonsContainer
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
                <GameTitle>{title}</GameTitle>
            </SubContainer>
            <p>{short_description}</p>
            <ButtonsContainer>
                <ButtonDislike onClick={removeFromFavorites}>
                    <RiDislikeLine />
                </ButtonDislike>
                <ButtonPlay onClick={() => {window.open(freetogame_profile_url)}}>
                    Play
                </ButtonPlay>
            </ButtonsContainer>
        </Container>
    )
}

export default Index;