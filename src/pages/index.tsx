import { GetStaticProps } from 'next'
import Header from '../components/Header'
import PrimaryButton from '../components/PrimaryButton'
import ImageGameCard from '../components/ImageGameCard'
import { api } from '../services/api'
import { gameTypes } from '../types/gameCardTypes'
import { Container, Main, Banner, ButtonsContainer} from '../styles/index'


export default function Home({ releasedGames }) {
  return (
    <Container>
      <Header />
      <Banner>
        <h1>Centenas de jogos grátis</h1>
        <span>Faça <a href="/login"> login </a>e comece a jogar</span>
      </Banner>
      <Main>
        <div>
          {
            releasedGames.map(game => (
              <ImageGameCard
                id={game.id}
                thumbnail={game.thumbnail}
              />
            )).slice(0, 3)
          }
        </div>
        <div>
          {
            releasedGames.map(game => (
              <ImageGameCard
                id={game.id}
                thumbnail={game.thumbnail}
              />
            )).slice(4, 7)
          }
        </div>
        <div>
          {
            releasedGames.map(game => (
              <ImageGameCard
                id={game.id}
                thumbnail={game.thumbnail}
              />
            )).slice(8, 11)
          }
        </div>
        <ButtonsContainer>
          <h1>+ de 500 jogos disponíveis para jogar gratuitamente</h1>
          <PrimaryButton
            label="Explorar todos os jogos"
          />
        </ButtonsContainer>
      </Main>
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