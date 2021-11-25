import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    Container,
    LoginContainer,
    Img,
    GoogleLoginButton,
    GitHubLoginButton
} from '../styles/pages/login'

export default function Login() {
    return (
        <Container>
            <Header />
            <main>
                <LoginContainer>
                    <h2>Faça seu login e comece a aventura</h2>
                    <span>Fazendo login você pode adicionar seu jogos aos favoritos, acompahar os jogos que você mais joga e muito mais.</span>
                    <GoogleLoginButton
                    >
                        Fazer login com o Google
                    </GoogleLoginButton>
                    <GitHubLoginButton
                    >
                        Fazer login com o GitHub
                    </GitHubLoginButton>
                </LoginContainer>
            </main>
            <Img
                src='/login-char.png'
                width={340}
                height={400}
            />
            <Footer />
        </Container>
    )
}

