import { gameCardTypes } from "../../types/gameCardTypes";
import { ButtonAddFav, ButtonPlay, Container, Img } from "./styles";

const Index = ({
    id,
    thumbnail,
    freetogame_profile_url,
    addToFavorites,
    actionLabelText,
    isInactiveButton
}: gameCardTypes) => {
    return (
        <Container key={id} >
            <Img src={thumbnail} />
            <ButtonPlay onClick={() => { window.open(freetogame_profile_url) }}>
                Play
            </ButtonPlay>
            <ButtonAddFav onClick={addToFavorites} disabled={isInactiveButton}>
                {actionLabelText}
            </ButtonAddFav>
        </Container>
    )
}

export default Index;