import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 96.2%;
    height: 72px;
    background: ${props => props.theme.colors.gray};
    padding: .4rem;
    cursor: pointer;
    transition: all .3s ease;
    margin: 0 auto 1rem;
    
    &:hover {
        background: ${props => props.theme.colors.gray3};
    }
    
    h3{
        color: ${props => props.theme.colors.gray2};
        font-size: 1rem;
    }

    img{
        width: 72px;
        height: 48px;
        margin: .8rem 1rem 1rem;
    }

`