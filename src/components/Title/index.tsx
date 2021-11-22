import {  Container, Title } from './styles'

type TitleProp = {
    title: string;
}

const Index = ({title} : TitleProp) =>  {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

export default Index
