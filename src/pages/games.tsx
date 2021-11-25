import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameCard from '../components/GameCard'
import { Container, LoadingContainer } from '../styles/pages/games'
import { GetStaticProps } from 'next'
import { getGames, useGamesList } from '../hooks/useGamesList'
import RingLoaderComponent from '../components/RingLoader'
import { useState } from 'react'


export default function Games({ games }) {



    const { data, isFetching } = useGamesList({ initialData: games })

    const [loading, setLoading] = useState(true)

    return (
        <Container>
            <Header />
            <main>
                {
                    isFetching ?
                        <LoadingContainer>
                            <img
                                src='/loading-char.png'
                                width={340}
                                height={400}
                            />
                            <span>Carregando...</span>
                            <RingLoaderComponent
                                isLoading={loading}
                            />
                        </LoadingContainer>
                        :
                        //@ts-ignore 
                        data.map(game => (
                            <GameCard
                                key={game.id}
                                id={game.id}
                                freetogame_profile_url={game.freetogame_profile_url}
                                thumbnail={game.thumbnail}
                            />
                        ))
                }
            </main>
            <Footer />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const games = await getGames()

    return {
        props: {
            games
        }
    }
}