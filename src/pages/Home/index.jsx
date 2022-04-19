import {Container, SearchContainer} from './styles'
import PersonTable from '../../components/PersonTable'

import { Link } from "react-router-dom";

import {AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'

import TextInput from '../../components/TextInput'

import {useState} from 'react'

export default function Home() {
    const [searchText, setSearchText] = useState('')
    return (
        <Container>
            <SearchContainer> 
                <AiOutlineSearch className="icon" size={25} color="#c3c3c3"/>
                <TextInput>
                    <input type="text" className="search" placeholder='Procure por nome e email' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                </TextInput>
                <Link to={`/criar`}>
                    <button>
                        <AiOutlinePlus size={30}/>
                        Criar
                    </button>
                </Link>
            </SearchContainer>
            <PersonTable searchText={searchText}/>
        </Container>
    )
}