import {Container, Badge} from './styles'
import {BsPencilFill, BsFillTrashFill} from 'react-icons/bs'

import {useState, useEffect} from 'react'

import { Link } from "react-router-dom";

import {getAllPersons, deletePerson} from '../../api/personAPI'



export default function PersonTable({searchText}) {
    const [persons, setPersons] = useState([])
    const [reload, setReload] = useState(true)
    const [orderBy, setOrderBy] = useState('')
    const [order, setOrder] = useState('')

    useEffect(() => {
        getAllPersons(searchText, orderBy, order).then((result) => {
            setPersons(result)
        })
        setReload(false)
    }, [reload, searchText, orderBy, order])

    function delPerson(id){
        deletePerson(id)
        setReload(true)
    }

    function changeOrder(column, event){
        const iElement = event.target.querySelector('i')
        iElement.classList.add('down')
        iElement.classList.remove('up')
        if(orderBy == column){
            if(order == 'asc'){
                setOrder('desc')
                iElement.classList.add('up')
                iElement.classList.remove('down')
            }else{
                setOrder('asc')
            }
        }else{
            setOrderBy(column)
            setOrder('asc')
        }
        console.log(event.target.querySelector('i'))
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
                        <th onClick={() => changeOrder('firstname', event)} className="order"> 
                            Nome 
                            <i className="arrow down"></i>
                        </th>
                        <th onClick={() => changeOrder('email', event)} className="order">
                            Email
                            <i className="arrow down"></i>
                        </th>
                        <th>Telefone</th>
                        <th onClick={() => changeOrder('gender', event)} className="order">
                            Gênero
                            <i className="arrow down"></i>
                        </th>
                        <th onClick={() => changeOrder('birthdate', event)} className="order">
                            Data de nascimento
                            <i className="arrow down"></i>
                        </th>
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