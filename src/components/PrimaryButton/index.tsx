import { useRouter } from 'next/router'
import { Button } from './styles'

type ButtonProps = {
    label: string
    action: () => void;
}

export default function PrimaryButton({ label, action }: ButtonProps) {
    const router = useRouter()
    return <Button onClick={action}>{ label }</ Button>
}