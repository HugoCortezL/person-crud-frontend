import {Container, SearchContainer} from './styles'
import PersonTable from '../../components/PersonTable'

import { Link } from "react-router-dom";

import {AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'

import TextInput from '../../components/TextInput'


export default function Home() {
    return (
        <Container>
            <SearchContainer> 
                <AiOutlineSearch className="icon" size={25} color="#c3c3c3"/>
                <TextInput>
                    <input type="text" className="search"/>
                </TextInput>
                <Link to={`/criar`}>
                    <button>
                        <AiOutlinePlus size={30}/>
                        Criar
                    </button>
                </Link>
            </SearchContainer>
            <PersonTable/>
        </Container>
    )
}