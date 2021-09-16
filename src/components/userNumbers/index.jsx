// Styled-Components Imports
import {
    Container, 
    Number
} from './styles'

// Functionaties Imports
import { useHistory } from 'react-router-dom'

// Page Component's setup
const UserNumbers = props => {
    const history = useHistory()
    return (
        <Container>
            <Number onClick={() => history.push('followers')}>
                <span>{props.followers}</span>
                <span>Seguidores</span>
            </Number>
            <Number onClick={() => history.push('following')}>
                <span>{props.following}</span>
                <span>Seguindo</span>
            </Number>
            <Number onClick={() => history.push('repos')}>
                <span>{props.repos}</span>
                <span>Repos</span>
            </Number>
        </Container>
    ) 
}

export default UserNumbers