import React from 'react'
import { GetServerSideProps } from 'next'
import ImageGameCard from '../ImageGameCard'
import { api } from '../../services/api'
import { Container } from './styles'


type GameProps = {
    id: number;
    thumbnail: string;
}

type GameSectionProps = {
    releasedGames: GameProps[]
    initialQueryIndex: number;
    finalQueryIndex: number;
}

export default function GameSection({
    releasedGames,
    initialQueryIndex,
    finalQueryIndex
}: GameSectionProps) {
    return (
        <Container>
            {
                releasedGames.map(game => (
                    <ImageGameCard
                        id={game.id}
                        thumbnail={game.thumbnail}
                    />
                )).slice(initialQueryIndex, finalQueryIndex)
            }
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const data = await api.get<GameProps[]>('/games')
    const releasedGames = data.data.map(game => {
        return {
            id: game.id,
            thumbnail: game.thumbnail
        }
    })

    return {
        props: {
            releasedGames
        }
    }
}