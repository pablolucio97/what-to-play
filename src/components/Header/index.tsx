import { ChangeEvent } from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BiJoystickButton } from 'react-icons/bi'
import Switch from 'react-switch'
import {
    TitleContainer,
    Container,
    Title,
    MenuContainer,
} from './styles'




type HeaderProps = {
    search?: (e: ChangeEvent<HTMLInputElement>) => void;
    toggleTheme?(): void;
}


const Index = ({ search, toggleTheme }: HeaderProps) => {



   // const { title, colors } = useContext(ThemeContext)


    return (
        <Container>
            <TitleContainer>
                <BiJoystickButton size={32} color='#fff' />
                <Title>WhatToPlay</Title>
            </TitleContainer>
            <MenuContainer>
        
            </MenuContainer>
        </Container>
    )
}

export default Index;
