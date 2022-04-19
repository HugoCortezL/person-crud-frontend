import {Container, FirstLine, DataPerson, Badge, DeleteContainer} from './styles'

export default function MobileListCard(props) {
    return (
        <Container>
            <Badge status={props.person.active}/>
            <FirstLine>
                <span className="name"> {props.person.firstname} {props.person.lastname}</span>
                <span className="gender">({props.person.gender})</span>
            </FirstLine>
            <DataPerson>
                <span>
                    <span className="email">Email: </span> {props.person.email}
                </span>
                <span>
                    <span className="phone">Phone: </span> {props.person.phone}
                </span>
                <span>
                    <span className="birthdate">Data de Nascimento: </span> {props.person.birthdate}
                </span>
            </DataPerson>
            <DeleteContainer>
                {props.children}
            </DeleteContainer>
        </Container>
    )
}