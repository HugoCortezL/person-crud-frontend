import {Container, FormContainer, ButtonsContainer} from './styles'
import TextInput from '../../components/TextInput'

import {useState} from 'react'

import { Link, Navigate  } from "react-router-dom";

import {createPerson} from '../../api/personAPI'

export default function CreateEditPerson() {
    const [personCreated, setPersonCreated] = useState(false)
    const [person, setPerson] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "Masculino",
        phone: "",
        birthdate: "",
        active: 1
    })

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
    return (
        <Container>
            <h1>Criar Pessoa</h1>
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
                <button className="save" onClick={createNewPerson}>
                    Salvar
                </button>
                {personCreated && <Navigate replace to="/"/>}
            </ButtonsContainer>
        </Container>
    )
}