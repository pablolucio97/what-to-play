import { Button, Container, InfoContainer, Img, GameTitle } from './styles'
import {gameCardTypes} from '../../types/gameCardTypes'



const Index = ({
    id,
    freetogame_profile_url,
    title,
    short_description,
    thumbnail
} : gameCardTypes) => {
    return (
        <Container key={id}>
            <Img src={thumbnail}/>
            <InfoContainer>
                <GameTitle>{title}</GameTitle>
            <Button onClick={() => {window.open(freetogame_profile_url)}}>
                Play
                <p>{short_description}</p>
            </Button>
            </InfoContainer>
        </Container>
    )
}

export default Index;