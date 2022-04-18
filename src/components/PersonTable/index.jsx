import {Container, Badge} from './styles'
import {BsPencilFill, BsFillTrashFill} from 'react-icons/bs'
export default function PersonTable() {
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
                    <tr>
                        <td>Hugo Cortez</td>
                        <td>hugocortezprog@gmail.com</td>
                        <td>81991274586</td>
                        <td>Masculino</td>
                        <td>13/06/2000</td>
                        <td>
                            <Badge status={true}>
                                True
                            </Badge>
                        </td>
                        <td className="options">
                            <BsPencilFill color="#F58100" size="20"/> 
                            <BsFillTrashFill color="#FF1D23" size="20"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Hugo Cortez</td>
                        <td>hugocortezprog@gmail.com</td>
                        <td>81991274586</td>
                        <td>Masculino</td>
                        <td>13/06/2000</td>
                        <td>
                            <Badge status={false}>
                                False
                            </Badge>
                        </td>
                        <td className="options">
                            <BsPencilFill color="#F58100" size="20"/> 
                            <BsFillTrashFill color="#FF1D23" size="20"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Hugo Cortez</td>
                        <td>hugocortezprog@gmail.com</td>
                        <td>81991274586</td>
                        <td>Masculino</td>
                        <td>13/06/2000</td>
                        <td>True</td>
                        <td>Edit - Delete</td>
                    </tr>
                    <tr>
                        <td>Hugo Cortez</td>
                        <td>hugocortezprog@gmail.com</td>
                        <td>81991274586</td>
                        <td>Masculino</td>
                        <td>13/06/2000</td>
                        <td>True</td>
                        <td>Edit - Delete</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}