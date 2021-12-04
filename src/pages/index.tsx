import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameSection from '../components/GameSection'
import PrimaryButton from '../components/PrimaryButton'
import { Container, Main, Banner, ButtonsContainer } from '../styles/pages/index'
import Link from 'next/link'


export default function Home({ releasedGames }) {

  const router = useRouter()

  return (
    <Container>
      <Header />
      <Banner>
        <h1>Centenas de jogos grátis</h1>
        <span>Faça
          <Link href='/login'>
            <a> Login </a>
          </Link>e comece a jogar</span>
      </Banner>
      <Main>
        <GameSection
          releasedGames={releasedGames}
          initialQueryIndex={0}
          finalQueryIndex={3}
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

  const response = await fetch('https://www.freetogame.com/api/games')
  const data = await response.json()
  const releasedGames = data.map(game => {
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