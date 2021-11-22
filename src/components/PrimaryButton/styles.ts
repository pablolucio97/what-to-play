import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    width: 240px;
    height: 48px;
    font-size: 1.12rem;
    background: ${props => props.theme.colors.primary1};
    color: #fff;

`