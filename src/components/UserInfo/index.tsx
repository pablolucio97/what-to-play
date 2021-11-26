import React from 'react'
import { UserContainer, Avatar, UserName, UserInfoContainer } from './styles'
import { UserProps } from '../../types/userTypes'

export default function UserInfo({ avatar, name, id, children }: UserProps){

    return (
        <UserContainer >
            <UserInfoContainer key={id}>
                <Avatar src={avatar} />
                <UserName>Olá, {name}!</UserName>
            </UserInfoContainer>
            <div>
                {children}
            </div>
        </UserContainer>
    )
}

