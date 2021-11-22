import { UserContainer, Avatar, UserName, UserInfoContainer } from './styles'
import { UserProps } from '../../types/userTypes'

export const UserInfo = ({ avatar, name, id, children }: UserProps) => {

    return (
        <UserContainer >
            <UserInfoContainer key={id}>
                <Avatar src={avatar} />
                <UserName>Hello, {name}!</UserName>
            </UserInfoContainer>
            <div>
                {children}
            </div>
        </UserContainer>
    )
}

