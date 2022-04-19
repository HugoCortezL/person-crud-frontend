import {Container} from './styles'

export default function TextInput(props) {
    return (
        <Container borderColor={props.borderColor} className={props.className}>
            {props.children}
        </Container>
    )
}