import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    Container,
    LoginContainer,
    Img,
    DiscordLoginButton,
    GitHubLoginButton,
    GoogleLoginButton
} from '../styles/pages/login'
import { signIn } from 'next-auth/client'
import {useSession} from 'next-auth/client'
import { useRouter } from 'next/router'
import {SiDiscord, SiGithub, SiGoogle} from 'react-icons/si'



export default function Login() {

    const [session] = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/games')
        }
    }, [session])

    return (
        <Container>
            <Header />
            <main>
                <LoginContainer>
                    <h2>Faça seu login e comece a aventura</h2>
                    <span>Fazendo login você pode adicionar seu jogos aos favoritos, acompahar os jogos que você mais joga e muito mais.</span>
                    <GoogleLoginButton
                    onClick={() => signIn('google')}
                    >
                        Fazer login com o Google 
                        <SiGoogle
                            style={{marginLeft: 8, fontSize: 20}}
                        />
                    </GoogleLoginButton>
                    <DiscordLoginButton
                    onClick={() => signIn('discord')}
                    >
                        Fazer login com o Discord 
                        <SiDiscord
                            style={{marginLeft: 8, fontSize: 20}}
                        />
                    </DiscordLoginButton>
                    <GitHubLoginButton
                        onClick={() => signIn('github')}
                    >
                        Fazer login com o GitHub 
                        <SiGithub
                            style={{marginLeft: 8, fontSize: 20}}
                        />
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

