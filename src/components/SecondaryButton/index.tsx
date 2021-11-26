import React from 'react';
import { Button } from './styles'

type ButtonProps = {
    label: string
    action: () => void
}

export default function Secondary({ label, action }: ButtonProps) {
    return <Button onClick={action}>{label}</Button>
}