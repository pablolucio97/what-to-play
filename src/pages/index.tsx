import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CountUp from "react-countup";

import Footer from "../components/Footer";
import GameSection from "../components/GameSection";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import {
  Banner,
  ButtonsContainer,
  Container,
  Main
} from "../styles/pages/index";

export default function Home({ releasedGames }) {

  const router = useRouter()
  return (
    <Container>
      <Head>
        <title>WhatToPlay | Home</title>
      </Head>
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
          <h1>+ de <CountUp end={360} duration={3} delay={1} /> jogos disponíveis para jogar gratuitamente</h1>
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