import React, { useCallback, useEffect } from 'react';
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

export default function Games({ games }) {

    const [session] = useSession()
    const router = useRouter()

    const { isFetching } = useGamesList({ 
        initialData: games, 
        staleTime: 5000,
        refetchOnWindowFocus: false,
     })
    const [loading, setLoading] = useState(true)
    const [searchGame, setSearchGame] = useState('')
    const [sugestedSearchGames, setSugestedSearchGames] = useState([])


    useEffect(() => {
        const foundGame = games.filter((game) => game.title.toLowerCase() === searchGame.toLowerCase());
        setSugestedSearchGames([...foundGame])
    }, [searchGame])


    function addToFavorites(id){
        console.log(id)
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
                                            label="Acessar Dasboard"
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
                                            addToFavorites={() => addToFavorites(game.id)}
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