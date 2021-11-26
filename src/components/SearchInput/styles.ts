import styled from 'styled-components'

export const Input = styled.input`
    width: 95%;
    height: 24px;
    padding: 1rem;
    background: ${props => props.theme.colors.gray2};
    color: ${props => props.theme.colors.gray};
    border: none;
    outline: none;
    font-size: 1rem;
    margin: 2rem auto;
    box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
    transition: all .3s ease-in-out;
`