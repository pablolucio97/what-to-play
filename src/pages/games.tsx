import Header from '../components/Header'
import Footer from '../components/Footer'
import GameCard from '../components/GameCard'
import { Container } from '../styles/pages/games'
import { api } from '../services/api'
import { gameTypes } from '../types/gameCardTypes'
import { GetStaticProps } from 'next'


export default function Games({ games }) {
    return (
        <Container>
            <Header />
            <main>
                {games.map(game => (
                    <GameCard
                        id={game.id}
                        freetogame_profile_url={game.freetogame_profile_url}
                        thumbnail={game.thumbnail}
                    />
                ))}
            </main>
            <Footer />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const data = await api.get<gameTypes[]>('/games')
    const games = data.data.map(game => {
        return {
            id: game.id,
            thumbnail: game.thumbnail,
            title: game.title,
            freetogame_profile_url: game.freetogame_profile_url,
        }
    })

    return {
        props: {
            games
        }
    }
}