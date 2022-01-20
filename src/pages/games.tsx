import "react-toastify/dist/ReactToastify.css";

import { GetStaticProps } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import RingLoaderComponent from "../components/RingLoader";
import SearchInput from "../components/SearchInput";
import SugestedGameSearch from "../components/SugestedGameSearch";
import UserInfo from "../components/UserInfo";
import { getGames, useGamesList } from "../hooks/useGamesList";
import { api } from "../services/api";
import {
  Container,
  GamesContainer,
  LoadingContainer,
  SearchContainer,
  UserContainer
} from "../styles/pages/games";

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


    function handleSearchGameByTile() {
        if(searchGame){
            const foundGame = games.filter((game) => {
                if (game.title.toLowerCase().includes(searchGame.toLowerCase())) {
                    return game
                }
            });
            setSugestedSearchGames(foundGame.slice(0,5))
        }else{
            setSugestedSearchGames([])
        }
       
    }

    async function hasUser() {
        await api.get('/checkuser')
    }

    useEffect(() => {
        hasUser()
    }, [])

    useEffect(() => {
        handleSearchGameByTile()
    }, [searchGame])

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
            <Head>
                <title>WhatToPlay | Games</title>
            </Head>
            <Header />
            <div id="top"></div>
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
                                <BackToTopButton />
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