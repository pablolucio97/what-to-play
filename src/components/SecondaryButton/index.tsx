import { Button } from './styles'

type ButtonProps = {
    label: string
}

export default function Secondary({ label }: ButtonProps) {
    return <Button>{label}</Button>
}