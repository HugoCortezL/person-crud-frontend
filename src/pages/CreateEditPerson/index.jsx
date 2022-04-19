import {Container, FormContainer, ButtonsContainer} from './styles'
import TextInput from '../../components/TextInput'

export default function CreateEditPerson() {
    return (
        <Container>
            <h1>Criar Pessoa</h1>
            <FormContainer>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Primeiro Nome</label>
                        <input type="text" />
                    </TextInput>
                    <TextInput>
                        <label>Último Nome</label>
                        <input type="text" />
                    </TextInput>
                </div>
                <div className="grid-area-single">
                    <TextInput>
                        <label>Email</label>
                        <input type="text" />
                    </TextInput>
                </div>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Genero</label>
                        <select name="gender" id="gender">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </TextInput>
                    <TextInput>
                        <label>Celular</label>
                        <input type="text" />
                    </TextInput>
                </div>
                <div className="grid-area-double">
                    <TextInput>
                        <label>Data de nascimento</label>
                        <input type="date" />
                    </TextInput>
                    <TextInput className="active">
                        <span className="left"> Sim </span>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                        <span className="right"> Não </span>
                    </TextInput>
                </div>
            </FormContainer>
            <ButtonsContainer>
                <button className="cancel">
                    Cancelar
                </button>
                <button className="save">
                    Salvar
                </button>
            </ButtonsContainer>
        </Container>
    )
}