import {Container, Badge} from './styles'
import {BsPencilFill, BsFillTrashFill} from 'react-icons/bs'

import {useState, useEffect} from 'react'

import {getAllPersons} from '../../api/personAPI'



export default function PersonTable() {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getAllPersons().then((result) => {
            setPersons(result)
        })
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Active</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(person => (
                            <tr key={person.Id}>
                                <td>{person.firstname} {person.lastname}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                                <td>{person.gender}</td>
                                <td>{person.birthdate}</td>
                                <td>
                                    <Badge status={person.active}>
                                        {person.active}
                                    </Badge>
                                </td>
                                <td className="options">
                                    <BsPencilFill color="#F58100" size="20"/> 
                                    <BsFillTrashFill color="#FF1D23" size="20"/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}