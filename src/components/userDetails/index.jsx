// Styled-Components Imports
import {
    Container, 
    Name,
    Email,
    Location
} from './styles'

// Page Component's setup
const UserDetails = props => (
    <Container>
        <Name>{props.name}</Name>
        <Email>{props?.email}</Email>
        <Location>{props?.location}</Location>
    </Container>
)

export default UserDetails