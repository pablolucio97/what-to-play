import React from 'react';
import { useRouter } from 'next/router'
import { BiJoystickButton } from 'react-icons/bi'
import {
    TitleContainer,
    Container,
    Title
} from './styles'


const Index = () => {

    const router = useRouter()

    return (
        <Container onClick={() => router.push('/')}>
            <TitleContainer>
                <BiJoystickButton size={32} color='#fff' />
                <Title>WhatToPlay</Title>
            </TitleContainer>
        </Container>
    )
}

export default Index;
