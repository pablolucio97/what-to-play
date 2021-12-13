import React from "react";

import { UserProps } from "../../types/userTypes";
import { Avatar, UserContainer, UserInfoContainer, UserName } from "./styles";

export default function UserInfo({ avatar, name, id, children }: UserProps) {

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

