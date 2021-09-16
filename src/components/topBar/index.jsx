// Styled-Components Imports
import {
    Container,
    User,
    Logoff
} from './styles'

// Functionaties Imports
import { useHistory } from 'react-router-dom'

// Page Component's setup
const TopBar = props => {
    const history = useHistory()

    const handleClick = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <Container>
            <User>#{props.user}</User>
            <Logoff onClick={() => handleClick()}>
                Sair
            </Logoff>
        </Container>
    )
}

export default TopBar