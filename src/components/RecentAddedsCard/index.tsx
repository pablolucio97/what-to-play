import { Button, Container, InfoContainer, Img, GameTitle, Description, InfoSubContainer } from './styles'
import { FaWindows } from 'react-icons/fa'
import { gameCardTypes } from '../../types/gameCardTypes'

const Index = ({ id, thumbnail, short_description, freetogame_profile_url, title }: gameCardTypes) => {
    return (
        <Container key={id}>
            <Img src={thumbnail} />
            <InfoContainer>
                <InfoSubContainer>
                    <GameTitle>{title}</GameTitle>
                    <Description>
                        {short_description}
                    </Description>
                </InfoSubContainer>
            </InfoContainer>
            <FaWindows size={24} />
            <Button onClick={() => {window.open(freetogame_profile_url)}}>
                Free
            </Button>
        </Container>
    )
}

export default Index;
