import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary1};
    color: ${props => props.theme.colors.background};
    position: fixed;
    top: 88vh;
    right: 32px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    z-index: 1000;
`