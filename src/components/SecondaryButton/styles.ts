import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    width: 240px;
    height: 48px;
    font-size: 1.12rem;
    border: 1px solid ${props => props.theme.colors.primary1};
    color: ${props => props.theme.colors.primary1};
    background: transparent;
    @media(max-width: 720px){
        width: 188px;
        height: 40px;
        font-size: .92rem;
    }
`