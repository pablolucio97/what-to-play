import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    Container,
    LoginContainer,
    Img,
    GoogleLoginButton,
    GitHubLoginButton
} from '../styles/pages/login'
import Image from 'next/image'


export default function Login() {
    return (
        <Container>
            <Header />
            <main>
                <LoginContainer>
                    <h2>Faça seu login e comece a aventura</h2>
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

