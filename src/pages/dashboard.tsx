import React, { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import { Container, FavoritesContainer, UserContainer } from '../styles/pages/dashboard'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { signOut, useSession } from 'next-auth/client'
import { api } from '../services/api'
import FavoriteGame from '../components/FavoriteGame';
import { gameCardTypes } from '../types/gameCardTypes'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DashBoard() {

    const router = useRouter()
    const [session] = useSession()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [favoriteGames, setFavoriteGames] = useState<gameCardTypes[]>([])

    function openModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    async function getFavorites() {
        const { data } = await api.get('/favorites')
        const favorites = data.favorites
        setFavoriteGames(favorites)
    }


/*     useEffect(() => {
        if (!session) {
            router.push('/games')
        }
    }, []) */


    useEffect(() => {
        getFavorites()
    }, [removeFavorite])


    async function removeFavorite(id) {
        //@ts-ignore
        await api.delete('/favorites', { data: { id: id } }).then(() => {
            toast.success('Título removido.',{
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
    }

    return (
        <Container>
            <Header />
            <main>
                {
                    session &&
                    <UserContainer>
                        <UserInfo
                            name={session.user.name}
                            avatar={session.user.image}
                        />

                        <SecondaryButton
                            action={openModal}
                            label="Sair"
                        />
                    </UserContainer>
                }


                <h2>Minha biblioteca de jogos</h2>

                <FavoritesContainer>
                    {favoriteGames.length === 0 ?
                        <h3>Não há nada por aqui. Que tal adicionar <a onClick={() => { router.push('/games') }}>alguns jogos</a> ?</h3> :
                        <>
                            {
                                favoriteGames.map((game) => (
                                    <FavoriteGame
                                        key={game.id}
                                        title={game.title}
                                        thumbnail={game.thumbnail}
                                        short_description={game.short_description}
                                        freetogame_profile_url={game.freetogame_profile_url}
                                        removeFromFavorites={() => removeFavorite(game.id)}
                                    />
                                ))
                            }
                        </>
                    }
                </FavoritesContainer>
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
                <span>
                    <PrimaryButton
                        label='Acessar todos os jogos'
                        action={() => router.push('/games')}
                    />
                </span>
            </main>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='active-modal'
                overlayClassName='react-modal-overlay'
            >
                <strong>Deseja realmente sair?</strong>
                <PrimaryButton
                    label='Continuar jogando'
                    action={closeModal}
                />
                <SecondaryButton
                    label='Sair'
                    action={() => signOut()}
                />

            </Modal>
            <Footer />
        </Container>
    )
}