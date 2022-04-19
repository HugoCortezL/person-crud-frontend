import {Container, SearchContainer} from './styles'
import PersonTable from '../../components/PersonTable'

import {AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'

import TextInput from '../../components/TextInput'

export default function Home() {
    return (
        <Container>
            <SearchContainer>
                <AiOutlineSearch className="icon" size={25} color="#c3c3c3"/>
                <TextInput>
                    <input type="text" class="search"/>
                </TextInput>
                    <button>
                        <AiOutlinePlus size={30}/>
                        Criar
                    </button>
            </SearchContainer>
            <PersonTable/>
        </Container>
    )
}