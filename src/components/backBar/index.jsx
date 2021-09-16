// Styled-Components Imports
import {
    Container,
    Back,
    User
} from './styles'

// Functionaties Imports
import { useHistory } from 'react-router-dom'

// Page Component's setup
const TopBar = props => {
    const history = useHistory()
    return (
        <Container>
            <Back onClick={() => history.push('home')} />
            <User>{props.title}</User>
        </Container>
    )
}

export default TopBar