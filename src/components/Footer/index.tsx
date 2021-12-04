import React from 'react';
import { BiJoystickButton } from 'react-icons/bi'
import {
    Footer as FooterComponent,
    FooterContent,
    Descriptionontainer,
    Divider,
    LogoContainer,
    AuthorContainer
} from './styles'


export default function Footer() {
    return (
        <FooterComponent>
            <FooterContent>
                <Descriptionontainer>
                    <span>WhatToPlay é uma aplicação sem fins lucrativos que foi desenvolvida com o intuito de trazer diversão à comunidade sem custos para começar a jogar. Caso queira contribuir com algum valor para a manutenção desse projeto, <a href="https://www.buymeacoffee.com/pablosilvadev" target="_blank">clique aqui</a>. Para a construção dessa aplicação foram utilizados os dados da <a href="https://www.freetogame.com" target="_blank">FreeToGame</a> e os mesmos são de responsabilidades do grupo.</span>
                </Descriptionontainer>
                <LogoContainer>
                    <h1>WhatToPlay</h1>
                    <BiJoystickButton size={48} color='#fff' style={{marginLeft: 16}} />
                </LogoContainer>
            </FooterContent>
            <Divider />
            <AuthorContainer>
                <p>Desenvolvido com 💙 por <a href="https://www.linkedin.com/in/pablo-silva-76b521156/" target="_blank">Pablo Silva</a></p>
            </AuthorContainer>
        </FooterComponent>
    )
}