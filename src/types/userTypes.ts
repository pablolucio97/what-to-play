import {ReactNode} from 'react'

export type UserProps = {
    id?: string;
    name: string;
    avatar: string;
    children?: ReactNode
}

