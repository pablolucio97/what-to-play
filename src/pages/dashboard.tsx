import Header from '../components/Header';
import Footer from '../components/Footer';
import UserInfo from '../components/UserInfo';
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import { Container, FavoritesContainer } from '../styles/pages/dashboard'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { useState } from 'react';


export default function DashBoard() {

    const router = useRouter()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    return (
        <Container>
            <Header />
            <main>
                <UserInfo
                    name='Pablo'
                    avatar='https://github.com/pablolucio97.png'
                />
                <button onClick={openModal}>
                    Sair
                </button>
                <FavoritesContainer>
                    <h3>Não há nada por aqui. Que tal adicionar <a onClick={() => { router.push('/games') }}>alguns jogos</a> ?</h3>
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
                    action={() => router.push('/')}
                />

            </Modal>
            <Footer />
        </Container>
    )
}