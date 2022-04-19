import {Container, Badge} from './styles'
import {BsPencilFill, BsFillTrashFill} from 'react-icons/bs'

import {useState, useEffect} from 'react'

import { Link } from "react-router-dom";

import {getAllPersons, deletePerson} from '../../api/personAPI'



export default function PersonTable() {
    const [persons, setPersons] = useState([])
    const [reload, setReload] = useState(true)
    useEffect(() => {
        getAllPersons().then((result) => {
            setPersons(result)
        })
        setReload(false)
    }, [reload])

    function delPerson(id){
        deletePerson(id)
        setReload(true)
    }

    function refactorPerson(person){
        if(person.active == 1 || person.active == "Sim"){
            person.active = "Sim"
        }else{
            person.active = "Não"
        }
        if(person.birthdate.length > 10){
            var birthdateDay = person.birthdate.charAt(8) + person.birthdate.charAt(9)
            var birthdateMonth = person.birthdate.charAt(5) + person.birthdate.charAt(6)
            var birthdateYear = person.birthdate.charAt(0) + person.birthdate.charAt(1) + person.birthdate.charAt(2) + person.birthdate.charAt(3)
            person.birthdate = birthdateDay + "/" + birthdateMonth + "/" + birthdateYear
        }
        
    }

    if(persons.length > 0){
        persons.map(person => refactorPerson(person))
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Gênero</th>
                        <th>Data de nascimento</th>
                        <th>Ativo</th>
                        <th>Ações</th>
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
                                    <Link to={`/editar/${person.Id}`}>
                                        <BsPencilFill color="#F58100" size="20"/>
                                    </Link>
                                    <BsFillTrashFill color="#FF1D23" size="20" onClick={() => delPerson(person.Id)}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}