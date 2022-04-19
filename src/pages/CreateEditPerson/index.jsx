import {Container, FormContainer, ButtonsContainer} from './styles'
import TextInput from '../../components/TextInput'

import {useState, useEffect} from 'react'

import { Link, Navigate, useParams } from "react-router-dom";

import {createPerson, getPersonById, updatePerson} from '../../api/personAPI'

export default function CreateEditPerson(props) {
    const id = useParams().id
    const [personCreated, setPersonCreated] = useState(false)
    const [fetchedPerson, setFetchedPerson] = useState(false)
    const [person, setPerson] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "Masculino",
        phone: "",
        birthdate: "",
        active: 1
    })

    useEffect( () => {
        async function fetchPerson() {
            if(id && !fetchedPerson){
                const personToEdit = await getPersonById(id)
                
                var birthdateDay = personToEdit.birthdate.charAt(8) + personToEdit.birthdate.charAt(9)
                var birthdateMonth = personToEdit.birthdate.charAt(5) + personToEdit.birthdate.charAt(6)
                var birthdateYear = personToEdit.birthdate.charAt(0) + personToEdit.birthdate.charAt(1) + personToEdit.birthdate.charAt(2) + personToEdit.birthdate.charAt(3)
                personToEdit.birthdate = birthdateYear + "-" + birthdateMonth + "-" + birthdateDay


                setPerson(personToEdit)
                setFetchedPerson(true)
            }
        }
        fetchPerson()
    })

    var title = ''
    var todoButton = ''
    if(id){
        title="Editar pessoa"
        todoButton = <button className="save" onClick={editPerson}>
                        Salvar
                    </button>
    }else{
        title="Criar pessoa"
        todoButton = <button className="save" onClick={createNewPerson}>
                        Criar
                    </button>
    }
    

    function changePerson(){
        setPerson({
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            gender: document.getElementById("gender").value,
            phone: document.getElementById("phone").value,
            birthdate: document.getElementById("birthdate").value,
            active: document.getElementById("active").value
        })
    }

    function changePersonActive(){
        var newStatus = 0
        if (person.active == 0){
            newStatus = 1
        }
        setPerson({
            firstname: person.firstname,
            lastname: person.lastname,
            email: person.email,
            gender: person.gender,
            phone: person.phone,
            birthdate: person.birthdate,
            active: newStatus
        })
    }

    function checkPerson(){
        var checked = true
        var inputs = [document.getElementById("firstname"), 
                        document.getElementById("lastname"), 
                        document.getElementById("email"), 
                        document.getElementById("phone"), 
                        document.getElementById("birthdate")
                    ]
        inputs.forEach((input, index) => {
            input.classList.remove("wrong");
            if(!input.value){
                input.classList.add("wrong");
                if (checked){
                    checked = false
                }
            }else{
                if(input.type == "text" && input.value.length < 3){
                    input.classList.add("wrong");
                    if (checked){
                        checked = false
                    }
                }
                if(input.id == "phone"){
                    if(input.value.length != 11){
                        input.classList.add("wrong");
                        if (checked){
                            checked = false
                        }
                    }
                    let isNum = /^\d+$/.test(input.value)
                    if(!isNum){
                        input.classList.add("wrong");
                        if (checked){
                            checked = false
                        }
                    }
                }
            }
        })

        return checked
    }

    function createNewPerson(){
        var personOk = checkPerson()
        if(personOk){
            createPerson(person)
            setPersonCreated(true)
        }
    }

    function editPerson(){
        var personOk = checkPerson()
        if(personOk){
            updatePerson(id, person)
            setPersonCreated(true)
        }
    }

    return (
        <Container>
            <h1>{title}</h1>
            <FormContainer>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Primeiro Nome</label>
                        <input type="text" id="firstname" value={person.firstname} onChange={changePerson}/>
                    </TextInput>
                    <TextInput>
                        <label>Último Nome</label>
                        <input type="text"  id="lastname" value={person.lastname} onChange={changePerson}/>
                    </TextInput>
                </div>
                <div className="grid-area-single">
                    <TextInput>
                        <label>Email</label>
                        <input type="text"  id="email" value={person.email} onChange={changePerson}/>
                    </TextInput>
                </div>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Genero</label>
                        <select name="gender" id="gender" value={person.gender} onChange={changePerson}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </TextInput>
                    <TextInput>
                        <label>Celular</label>
                        <input type="text"  id="phone" value={person.phone} onChange={changePerson}/>
                    </TextInput>
                </div>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Data de nascimento</label>
                        <input type="date"  id="birthdate" value={person.birthdate} onChange={changePerson}/>
                    </TextInput>
                    <TextInput className="active">
                        <span className="left"> Sim </span>
                        <label className="switch">
                            <input type="checkbox"  id="active" value={person.active} onChange={changePersonActive}/>
                            <span className="slider round"></span>
                        </label>
                        <span className="right"> Não </span>
                    </TextInput>
                </div>
            </FormContainer>
            <ButtonsContainer>
                <Link to={`/`}>
                    <button className="cancel">
                        Cancelar
                    </button>
                </Link>
                {todoButton}
                {personCreated && <Navigate replace to="/"/>}
            </ButtonsContainer>
        </Container>
    )
}