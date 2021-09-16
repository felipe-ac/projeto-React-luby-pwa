// Styled-Components Imports
import {
    Container
} from './styles'

// Page Component's setup
const UserBio = props => (
    <Container>
       <h1>BIO</h1>
       <p>{props.bio}</p>
    </Container>
)

export default UserBio