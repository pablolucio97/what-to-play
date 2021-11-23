import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameSection from '../components/GameSection'
import PrimaryButton from '../components/PrimaryButton'
import { api } from '../services/api'
import { gameTypes } from '../types/gameCardTypes'
import { Container, Main, Banner, ButtonsContainer } from '../styles/pages/index'


export default function Home({ releasedGames }) {

  const router = useRouter()

  return (
    <Container>
      <Header />
      <Banner>
        <h1>Centenas de jogos grátis</h1>
        <span>Faça <a onClick={() => router.push('/login')}> login </a>e comece a jogar</span>
      </Banner>
      <Main>
        <GameSection
          releasedGames={releasedGames}
          initialQueryIndex={0}
          finalQueryIndex={3}
        />
        <GameSection
          releasedGames={releasedGames}
          initialQueryIndex={4}
          finalQueryIndex={7}
        />
        <GameSection
          releasedGames={releasedGames}
          initialQueryIndex={8}
          finalQueryIndex={11}
        />
        <ButtonsContainer>
          <h1>+ de 360 jogos disponíveis para jogar gratuitamente</h1>
          <PrimaryButton
            label="Explorar todos os jogos"
            action={() => router.push('/games')}
          />
        </ButtonsContainer>
      </Main>
      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const data = await api.get<gameTypes[]>('/games')
  const releasedGames = data.data.map(game => {
    return {
      id: game.id,
      thumbnail: game.thumbnail
    }
  })

  return {
    props: {
      releasedGames
    }
  }
}