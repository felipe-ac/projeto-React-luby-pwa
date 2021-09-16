// Styled-Components Imports
import {
    Container,
    ProfilePicture
} from './styles'

// Page Component's setup
const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.src} alt={props.alt} />
    </Container>
)

export default UserPicture