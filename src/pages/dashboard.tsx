import React, { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import { Container, FavoritesContainer } from '../styles/pages/dashboard'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { signOut, useSession } from 'next-auth/client'
import {api} from '../services/api'
import FavoriteGame from '../components/FavoriteGame';

export default function DashBoard() {

    const router = useRouter()
    const [session] = useSession()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [favoriteGames, setFavoriteGames] = useState([])

    function openModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    useEffect(() => {
        if (!session) {
            router.push('/games')
        }
    }, [])

    async function getFavorites(){
        const {data} = await api.get('/favorites')
        const favorites = data.data
        setFavoriteGames(favorites)
    }

    useEffect(() => {
        getFavorites()
        console.log(favoriteGames)
    },[])

    return (
        <Container>
            <Header />
            <main>
                {
                    session &&
                    <>
                        <UserInfo
                            name={session.user.name}
                            avatar={session.user.image}
                        />
                        <button onClick={openModal}>
                            Sair
                        </button>
                    </>
                }

                <FavoritesContainer>
                    {favoriteGames.length === 0 ?
                        <h3>Não há nada por aqui. Que tal adicionar <a onClick={() => { router.push('/games') }}>alguns jogos</a> ?</h3> :
                        favoriteGames.map((game) => (
                            <div>
                               <h1>{game}</h1>
                           </div>
                        ))
                    }
                </FavoritesContainer>
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