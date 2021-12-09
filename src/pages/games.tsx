import React, { useEffect } from 'react';
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
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Games({ games }) {

    const [session] = useSession()
    const router = useRouter()

    const { isFetching } = useGamesList({
        initialData: games,
        refetchOnWindowFocus: false,
        retryOnMount: false,
        staleTime: 1000 * 60 * 5 //5 min
    })
    const [loading, setLoading] = useState(true)
    const [searchGame, setSearchGame] = useState('')
    const [sugestedSearchGames, setSugestedSearchGames] = useState([])


    useEffect(() => {
        const foundGame = games.filter((game) => game.title.toLowerCase() === searchGame.toLowerCase());
        setSugestedSearchGames([...foundGame])
    }, [searchGame])
    
    async function hasUser(){
        await api.get('/checkuser')
    }

    useEffect(() => {
        hasUser()
    }, [])

        async function newFavorite(id, title, freetogame_profile_url, thumbnail, short_description) {
        try {
            await api.post('/favorites', { id, title, freetogame_profile_url, thumbnail, short_description }).then(() => {
                toast.success('Jogo adicionado à sua bilioteca.', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    pauseOnFocusLoss: false
                })
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <Header />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
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
                                        <Link href='/login'>
                                            <a>Login</a>
                                        </Link>
                                        para adicionar seus jogos ao favoritos e tornar a jogatina muito mais prática.
                                    </span>
                            }
                            <SearchContainer>
                                <SearchInput
                                    search={searchGame}
                                    updateSearch={(e) => setSearchGame(e.target.value)}
                                    placeholder='Buscar por um título'
                                />
                                {sugestedSearchGames.map(game => (
                                    <SugestedGameSearch
                                        id={game.id}
                                        title={game.title}
                                        thumbnail={game.thumbnail}
                                        freetogame_profile_url={game.freetogame_profile_url}
                                        short_description={game.short_description}
                                        show_favorite={!!session}
                                        addToFavorites={() => newFavorite(game.id, game.title, game.freetogame_profile_url, game.thumbnail, game.short_description)}
                                    />
                                ))}
                            </SearchContainer>
                            <GamesContainer>
                                {
                                    games.map(game => (
                                        <GameCard
                                            key={game.id}
                                            id={game.id}
                                            freetogame_profile_url={game.freetogame_profile_url}
                                            thumbnail={game.thumbnail}
                                            show_favorite={!!session}
                                            addToFavorites={() => newFavorite(game.id, game.title, game.freetogame_profile_url, game.thumbnail, game.
                                                short_description)}
                                        />
                                    ))}

                            </GamesContainer>
                        </Container>
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