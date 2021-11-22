import { Button } from './styles'

type ButtonProps = {
    label: string
}

export default function PrimaryButton({ label }: ButtonProps) {
    return <Button>{label}</Button>
}