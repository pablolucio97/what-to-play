import React, { FormEvent, useEffect } from 'react';
import "regenerator-runtime/runtime";
import "core-js/stable";
import "babel-polyfill"
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameCard from '../components/GameCard'
import {
    Container,
    LoadingContainer,
    SearchContainer,
    GamesContainer,
    UserContainer
} from '../styles/pages/games'
import { GetStaticProps } from 'next'
import { getGames, useGamesList } from '../hooks/useGamesList'
import RingLoaderComponent from '../components/RingLoader'
import { useState } from 'react'
import SearchInput from '../components/SearchInput'
import SugestedGameSearch from '../components/SugestedGameSearch'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import PrimaryButton from '../components/PrimaryButton';
import UserInfo from '../components/UserInfo';
import { api } from '../services/api'
import { route } from 'next/dist/server/router';

export default function Games({ games }) {

    const [session] = useSession()
    const router = useRouter()

    const { isFetching } = useGamesList({
        initialData: games,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 2 //2 hours
    })
    const [loading, setLoading] = useState(true)
    const [searchGame, setSearchGame] = useState('')
    const [sugestedSearchGames, setSugestedSearchGames] = useState([])


    useEffect(() => {
        const foundGame = games.filter((game) => game.title.toLowerCase() === searchGame.toLowerCase());
        setSugestedSearchGames([...foundGame])
    }, [searchGame])


    async function newFavorite(id, title, freetogame_profile_url, thumbnail) {
        await api.post('/favorites', { id, title, freetogame_profile_url, thumbnail }).then(res => console.log(res))
    }



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
                        <Container>
                            {
                                session ?
                                    <UserContainer>
                                        <UserInfo
                                            name={session.user.name}
                                            avatar={session.user.image}
                                        />

                                        <PrimaryButton
                                            action={() => router.push('/dashboard')}
                                            label="Acessar Dashboard"
                                        />
                                    </UserContainer>
                                    :
                                    <span>Faça seu
                                        <a onClick={() => router.push('/login')}>Login</a>
                                        para adicionar seus jogos ao favoritos e tornar a jogatina muito mais prática.
                                    </span>
                            }
                            <SearchContainer>
                                <SearchInput
                                    search={searchGame}
                                    updateSearch={(e) => setSearchGame(e.target.value)}
                                    placeholder='Buscar por um título, ex: (Valorant)'
                                />
                                {sugestedSearchGames.map(game => (
                                    <SugestedGameSearch
                                        id={game.id}
                                        title={game.title}
                                        thumbnail={game.thumbnail}
                                        freetogame_profile_url={game.freetogame_profile_url}
                                        show_favorite={!!session}
                                    />
                                ))}
                            </SearchContainer>
                            <GamesContainer>
                                {
                                    //@ts-ignore 
                                    games.map(game => (
                                        <GameCard
                                            key={game.id}
                                            id={game.id}
                                            freetogame_profile_url={game.freetogame_profile_url}
                                            thumbnail={game.thumbnail}
                                            show_favorite={!!session}
                                            addToFavorites={() => newFavorite(game.id, game.title, game.freetogame_profile_url, game.thumbnail)}
                                        />
                                    ))}

                            </GamesContainer>
                        </Container>
                }
            </main>
            <p>{searchGame}</p>
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