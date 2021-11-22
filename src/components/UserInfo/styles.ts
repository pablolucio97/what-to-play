import styled from 'styled-components'

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.gray};
    border-bottom: 2px solid  ${props => props.theme.colors.secondary1};
    width: 1160px;
    height: 48px;
    padding: .4rem;
    margin: 0 auto;
    border-radius: 2px;
    color: #fff;

    @media(max-width: 1240px){
        width: 92%;
    }

    @media(max-width: 720px){
        width: 256px;
        display: flex;
        flex-direction: column;
        height: 160px;
        margin-left: -1.8rem;
    }
`


export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 1rem;
`

export const UserName = styled.p`
    font-size: 1.2rem;
    color: #fff;
    font-weight: 400;
`
